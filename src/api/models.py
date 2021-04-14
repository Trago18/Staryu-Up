import os
import sys
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from eralchemy import render_er

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    phoneNumber = db.Column(db.String(8), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(50), nullable=False)

class Supplier(db.Model):
    __tablename__ = 'supplier'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    phoneNumber = db.Column(db.String(8), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(50), nullable=False)
    schedule = db.Column(db.String(50), nullable=False)
    rate = db.Column(db.String(50), nullable=False)
    comentaries = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(50), nullable=False)
    worksDone = db.Column(db.String(50), nullable=False)
    memberSince = db.Column(db.String(50), nullable=False)
    imageURL = db.Column(db.String(50), nullable=False)
    userId = Column(Integer,  ForeignKey('user.id'))
    user = relationship(User)

class Favorites(db.Model):
    __tablename__ = 'favorites'
    id = db.Column(db.Integer, primary_key=True)
    userId = Column(Integer,  ForeignKey('user.id'))
    supplierId = Column(Integer,  ForeignKey('supplier.id'))
    user = relationship(User)
    supplier = relationship(Supplier)

class Messages(db.Model):
    __tablename__ = 'messages'
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(1000), nullable=False)
    userId = Column(Integer,  ForeignKey('user.id'))
    supplierId = Column(Integer,  ForeignKey('supplier.id'))
    user = relationship(User)
    supplier = relationship(Supplier)

    def to_dict(self):
        return {}

## Draw from SQLAlchemy base
render_er(Base, 'diagram.png')