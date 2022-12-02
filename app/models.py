from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func
import datetime

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(150), unique=True)
    user = db.Column(db.String(150), unique=True)
    email = db.Column(db.String(150))
    password = db.Column(db.String(150))
    avatar = db.Column(db.String(150))
    role = db.Column(db.Integer)


class Projects(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    project_name = db.Column(db.String(300), unique=True, nullable=False)
    objetives = db.Column(db.String(500), unique=True, nullable=False)


class Details(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id_project = db.Column(db.Integer, nullable=False)
    leader = db.Column(db.String(100), nullable=False)
    contributor = db.Column(db.String(100), nullable=False)
    task_detail = db.Column(db.String(500), nullable=False)
    main_activity = db.Column(db.String(500), nullable=False)
    results = db.Column(db.String(500), nullable=False)
    progress_indicator = db.Column(db.Float, nullable=True)


class Documents(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    document_title = db.Column(db.String(200), nullable=False)
    document = db.Column(db.String(50000), nullable=False)
    user_creator = db.Column(db.String(100), nullable=False)
    date_creation = db.Column(db.String(15), nullable=False)
    user_edit = db.Column(db.String(100), nullable=True)
    date_edit = db.Column(db.String(15), nullable=True)


class SirhuIndicators(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    id_project = db.Column(db.Integer, nullable=False)
    subproject_name = db.Column(db.String(500), nullable=False)
    objetives = db.Column(db.String(500), nullable=False)
    activity = db.Column(db.String(500), nullable=True)
    percent = db.Column(db.Float, nullable=False)
    stage = db.Column(db.String(500), nullable=False)
    stage_percent = db.Column(db.Float, nullable=False)
    indicator_a = db.Column(db.Float)
    indicator_b = db.Column(db.Float)
    indicator_c = db.Column(db.Float)
    indicator_d = db.Column(db.Float)
    indicator_hope = db.Column(db.Float)
    indicator_get = db.Column(db.Float)
    month = db.Column(db.String(20), nullable=False)
    year = db.Column(db.String(4), nullable=False)
    month_year_per = db.Column(db.Float)
