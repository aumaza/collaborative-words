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
from .models import User

@views.route('/')
@login_required
def home():
    return render_template('index.html', user=current_user)
