from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import safe_str_cmp

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    profile_pic = db.Column(db.String(100), nullable=True)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(50), nullable=False)
    is_active = db.Column(db.Boolean(), nullable=True)
    user_supplier = db.relationship('Supplier', backref='user', lazy=True)
    user_commentaries = db.relationship('Commentaries', backref='user', lazy=True)
    user_favorites = db.relationship('Favorites', backref='user', lazy=True)
    user_rates = db.relationship('Rates', backref='user', lazy=True)

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "phone_number": self.phone_number,
            "profile_pic": self.profile_pic,
            "email": self.email,
            "password": self.password
        }
    
    def check_password(self, password):
        return safe_str_cmp(password, self.password)

class Supplier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(20), nullable=False)
    profile_pic = db.Column(db.String(100), nullable=True)
    category = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), unique=True, nullable=False)
    address = db.Column(db.String(100), nullable=False)
    schedule = db.Column(db.String(50), nullable=True)
    rate = db.Column(db.Float, nullable=True)
    description = db.Column(db.String(50), nullable=False)
    #jobsDone = db.Column(db.String(50), nullable=False)
    member_since = db.Column(db.String(50), nullable=True)
    image_url = db.Column(db.String(50), nullable=True)
    is_active = db.Column(db.Boolean(), nullable=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    supplier_commentaries = db.relationship('Commentaries', backref='supplier', lazy=True)
    supplier_favorites = db.relationship('Favorites', backref='supplier', lazy=True)
    supplier_rates = db.relationship('Rates', backref='supplier', lazy=True)

    def __repr__(self):
        return '<Supplier %s>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "phone_number": self.phone_number,
            "profile_pic": self.profile_pic,
            "category": self.category,
            "email": self.email,
            "address": self.address,
            "schedule": self.schedule,
            "rate": self.rate,
            "description": self.description,
            #"jobsDone": self.jobsDone,
            "member_since": self.member_since,
            "image_url": self.image_url,
        }

    def serializeSearch(self):
        return {
            "id": self.id,
            "name": self.name,
            "profile_pic": self.profile_pic,
            "address": self.address,
            "rate": self.rate,
            "description": self.description
        }

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    supplier_id = db.Column(db.Integer, db.ForeignKey('supplier.id'))
    
    def __repr__(self):
        return '<Favorite %r>' % self.id
    
    def serialize(self):
        supplier = Supplier.query.filter_by(id=self.supplier_id).first()
        return {
            "id": supplier.id,
            "name": supplier.name
        }

class Commentaries(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(200), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    supplier_id = db.Column(db.Integer, db.ForeignKey('supplier.id'))
    
    def __repr__(self):
        return '<Commentaries %r>' % self.id
    
    def serialize(self):
        user = User.query.filter_by(id=self.user_id).first()
        return {
            "comment": self.message,
            "name": user.first_name + " " + user.last_name
        }

class Rates(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rate = db.Column(db.Float, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    supplier_id = db.Column(db.Integer, db.ForeignKey('supplier.id'))
    
    def __repr__(self):
        return '<Rates %r>' % self.id
    
    def serialize(self):
        return self.rate