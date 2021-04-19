"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Supplier, Favorites
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/data-test', methods=['GET'])
def data_test():
    user=User(first_name='nombre1', last_name='apellido1', phone_number = 'numero1', email = 'test1@gmail.com', password = 'Pass123*', is_active = True)
    db.session.add(user)
    user=User(first_name='nombre2', last_name='apellido2', phone_number = 'numero2', email = 'test2@gmail.com', password = 'Pass234*', is_active = True)
    db.session.add(user)

    suppiler=Supplier(name='proveedor1', phone_number='numero1', email='test1@gmail.com', category='random', profile_pic='url', address='cr', description='test', rate=5, member_since='2021', user_id=1)
    db.session.add(suppiler)
    suppiler=Supplier(name='proveedor2', phone_number='numero2', email='test2@gmail.com', category='random', profile_pic='url', address='cr', description='test', rate=5, member_since='2021', user_id=1)
    db.session.add(suppiler)
    suppiler=Supplier(name='proveedor3', phone_number='numero3', email='test3@gmail.com', category='random', profile_pic='url', address='cr', description='test', rate=5, member_since='2021', user_id=2)
    db.session.add(suppiler)

    db.session.commit()
    return jsonify("ok"), 200


@api.route('/', methods=['POST'])
def search():

    search = request.json.get("search", None)

    supplier = Supplier.query.filter_by(name=search).all()
    all_suppliers = list(map(lambda x: x.serializeSearch(), supplier))

    return jsonify(all_suppliers), 200
    
@api.route("/user/<int:id>", methods=["GET"])
def get_user(id):

    user = User.query.filter_by(id=id).all()
    user = list(map(lambda x: x.serialize(), user))

    return jsonify(user), 200

@api.route("/supplier/<int:id>", methods=["GET"])
def get_supplier(id):

    supplier = Supplier.query.filter_by(id=id).all()
    supplier = list(map(lambda x: x.serialize(), supplier))

    return jsonify(supplier), 200
