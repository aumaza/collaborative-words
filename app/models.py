from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func
import datetime

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150))
    user = db.Column(db.String(150))
    email = db.Column(db.String(150))
    password = db.Column(db.String(150))
    avatar = db.Column(db.String(150))
    role = db.Column(db.Integer)
