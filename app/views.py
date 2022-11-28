from flask import Blueprint, render_template, request, flash, redirect, url_for, send_from_directory
from flask_login import login_user, login_required, logout_user, current_user
from werkzeug.security import generate_password_hash
from werkzeug.utils import secure_filename
from markupsafe import escape
from os.path import join, dirname, realpath
import imghdr
import os
from . import db
import json
import datetime
import shutil


views = Blueprint('views', '__name__')
from .models import User, Projects, Details

@views.route('/')
@login_required
def home():
    return render_template('index.html', user=current_user)


@views.route('/main')
@login_required
def main():
    return render_template('main.html', user=current_user)


#======================================================================
#VISTAS DE TABLAS
#======================================================================
@views.route('/usuarios')
@login_required
def usuarios():
    users = User.query
    count = User.query.count()
    return render_template('users.html', users=users, count=count, user=current_user)


@views.route('/projects')
@login_required
def projects():
    projects = Projects.query
    count = Projects.query.count()
    return render_template('projects.html', projects=projects, count=count, user=current_user)


@views.route('/project_details/<int:id>', methods=['GET', 'POST'])
@login_required
def details(id):
    project = Projects.query.get_or_404(id)
    details = Details.query.filter_by(id_project=id)
    count = Details.query.count()
    return render_template('details.html', project=project, details=details, count=count, user=current_user)







#======================================================================
#FORMULARIOS DE ALTA
#======================================================================
@views.route('/new-project', methods=['GET', 'POST'])
@login_required
def new_project():

    if request.method == 'POST':
        project_name = request.form.get('project_name')
        objetive = request.form.get('objetives')

        if len(project_name) == 0 or len(objetive) == 0:
            flash('Uno o todos los campos están vacíos. Debe completarlos!', category="error")
        else:
            new_project = Projects(project_name=project_name, objetives=objetive)
            db.session.add(new_project)
            db.session.commit()
            flash('Proyecto añadido Correctamente!', category="success")
            return redirect(url_for('views.projects'))


    return render_template('new_project.html', user=current_user)


@views.route('/new_details/<int:id>', methods=['GET', 'POST'])
@login_required
def new_details(id):
    project = Projects.query.get_or_404(id)
    
    if request.method == 'POST':
        leader = request.form.get('leader')
        contributors = request.form.get('contributors')
        task_detail = request.form.get('task_details')
        main_activity = request.form.get('main_activity')
        results = request.form.get('results')

        if len(leader) == 0 or len(contributors) == 0 or len(task_detail) == 0 or len(main_activity) == 0 or len(results) == 0:
            flash('Uno o más campos están vacíos. Veriquelo!', category='error')
        else:
            new_details = Details(id_project=id, leader=leader, contributor=contributors, task_detail=task_detail, main_activity=main_activity, results=results)
            db.session.add(new_details)
            db.session.commit()
            flash('Registro Guardado Exitosamente!', category='success')
            return redirect(url_for('views.projects'))

    return render_template('add_details.html', project=project, user=current_user)

#======================================================================
#EDICIONES
#======================================================================
@views.route('/update_permissions/<int:id>', methods=['GET', 'POST'])
@login_required
def update_permissions(id):
    usr = User.query.get_or_404(id)

    if request.method == 'POST':
        permiso = request.form.get('permisos')
        print(permiso)

        if permiso is None:
            flash('Debe seleccionar una opción!', category='error')
        else:
            usr.role = permiso
            db.session.add(usr)
            db.session.commit()
            flash('Permisos actualizados para del usuario %s' % (usr.name), category='success')
            return redirect(url_for('views.main'))

    return render_template('permissions.html', usr=usr, user=current_user)


def validate_image(stream):
    header = stream.read(512)
    stream.seek(0) 
    format = imghdr.what(None, header)
    if not format:
        return None
    return '.' + (format if format != 'jpeg' else 'jpg')


@views.route('/avatar/<int:id>', methods=['GET', 'POST'])
@login_required
def load_picture(id):
    usr = User.query.get_or_404(id)
    allow_types = ['.jpg', '.png', '.svg', '.gif']
    UPLOADS_PATH = 'app/static/avatars/'

    if request.method == 'POST':
        upload_file = request.files['file']
        filename = secure_filename(upload_file.filename)

        if filename != '':
            file_ext = os.path.splitext(filename)[1]
            
            if file_ext not in allow_types:
                flash('El tipo de archivo debe ser JPG, PNG, SVG o GIF!', category='error')
            else:
                upload_file.save(UPLOADS_PATH+filename)
                usr.avatar = filename
                db.session.add(usr)
                db.session.commit()
                flash('Imagen Agregada Satisfactoriamente!', category='success')
            return redirect(url_for('views.main'))
        
        else:
            flash('Debe seleccionar un archivo de imagen!', category='error')


    return render_template('avatar.html', user=current_user)


@views.route('/change_password/<int:id>', methods=['GET', 'POST'])
@login_required
def change_password(id):
    usr = User.query.get_or_404(id)

    if request.method == 'POST':
        password_1 = request.form.get('password_1')
        password_2 = request.form.get('password_2')

        if len(password_1) == 0 or len(password_2) == 0:
            flash('No ha ingresado Passwords o alguno de los campos está vacío!', category="error")
        elif len(password_1) < 8 or len(password_2) < 8:
            flash('Los Passwords no pueden tener menos de 8 Caracteres!', category='error')
        elif password_1 != password_2:
            flash('Los Passwords no coinciden!', category='error')
        else:
            usr.password = generate_password_hash(password_1, method='sha256')
            db.session.add(usr)
            db.session.commit()
            flash('El password ha sido actualizado exitosamente!', category='success')
            return redirect(url_for('auth.logout'))

    return render_template('change_password.html', user=current_user)


@views.route('/project_edit/<int:id>', methods=['GET', 'POST'])
@login_required
def project_edit(id):
    project = Projects.query.get_or_404(id)

    if request.method == 'POST':
        project_name = request.form.get('project_name')
        objetive = request.form.get('objetives')

        if len(project_name) == 0 or len(objetive) == 0:
            flash('Hay campos vacios. Verifique cual es y completelo!', category="error")
        else:
            project.project_name = project_name
            project.objetives = objetive
            db.session.add(project)
            db.session.commit()
            flash('Ha actualizado correctamente el proyecto %s' % project.project_name, category="success")
            return redirect(url_for('views.projects'))

    return render_template('project_edit.html', project=project, user=current_user)


