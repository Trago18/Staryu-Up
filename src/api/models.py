from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    phoneNumber = db.Column(db.String(8), nullable=False)
    profilePic = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(50), nullable=False)

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "firstName": self.firstName,
            "lastName": self.lastName,
            "phoneNumber": self.phoneNumber,
            "profilePic": self.profilePic,
            "email": self.email,
        }

class Supplier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    phoneNumber = db.Column(db.String(8), nullable=False)
    profilePic = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(50), nullable=False)
    schedule = db.Column(db.String(50), nullable=False)
    rate = db.Column(db.String(50), nullable=False)
    comentaries = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(50), nullable=False)
    worksDone = db.Column(db.String(50), nullable=False)
    memberSince = db.Column(db.String(50), nullable=False)
    imageURL = db.Column(db.String(50), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    user = relationship(User)

    def __repr__(self):
        return '<Supplier %s>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.firstName,
            "phoneNumber": self.phoneNumber,
            "profilePic": self.profilePic,
            "email": self.email,
            "address": self.address,
            "schedule": self.schedule,
            "rate": self.rate,
            "comentaries": self.comentaries,
            "description": self.description,
            "worksDone": self.worksDone,
            "memberSince": self.memberSince,
            "imageURL": self.imageURL,
        }
    

class Favorites(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    supplierId = db.Column(db.Integer, db.ForeignKey('supplier.id'))
    user = relationship(User)
    supplier = relationship(Supplier)

    def __repr__(self):
        return '<Favorite %r>' % self.id

class Messages(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    message = db.Column(db.String(1000), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('user.id'))
    supplierId = db.Column(db.Integer, db.ForeignKey('supplier.id'))

    def __repr__(self):
        return '<Messages %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "message": self.message,
        }