"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Supplier, Favorites
from api.utils import generate_sitemap, APIException
from datetime import timedelta
from flask_jwt_extended import create_access_token
import re

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

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

@api.route('/user_signup', methods=['POST'])
def create_user():

    request_body = request.get_json()
    error_messages=[]

    if 'first_name' not in request_body:
        error_messages.append({"msg":"First name required"})
    if 'last_name' not in request_body:
        error_messages.append({"msg":"Last name required"})
    if 'phone_number' not in request_body:
        error_messages.append({"msg":"Phone number required"})
    if 'email' not in request_body:
        error_messages.append({"msg":"Email required"})
    if 'password' not in request_body:
        error_messages.append({"msg":"Password required"}) 

    if not re.match('^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,8}$', request_body['email']):
        error_messages.append({'msg':'Enter a valid email format'})
    if not re.match('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\n\t]{8,20}$', request_body['password']):
        error_messages.append({'msg':'Password must contain the following: a lowercase letter, a capital letter, a number, one special character and minimum 8 characters'})
    if len(error_messages) > 0:
        return jsonify(error_messages), 400

    email = User.query.filter_by(email=request_body['email']).first()

    if email:
        error_messages.append({'msg': 'This email already exists. Check your email'})
    if len(error_messages) > 0:
        return jsonify(error_messages), 400

    user = User()
    user.first_name = request_body['first_name']
    user.last_name = request_body['last_name']
    user.phone_number = request_body['phone_number']
    #user.profile_pic = request_body['profile_pic']
    user.email = request_body['email']
    user.password = request_body['password']
    user.is_active=True

    db.session.add(user)
    db.session.commit()

    response_body = {
        "msg": "The user was successfully created."
    }

    return jsonify(response_body), 200

@api.route('/supplier_signup', methods=['POST'])
def create_supplier():

    request_body = request.get_json()
    error_messages=[]

    if 'name' not in request_body:
        error_messages.append({"msg":"Name required"})
    if 'phone_number' not in request_body:
        error_messages.append({"msg":"Phone number required"})
    if 'category' not in request_body:
        error_messages.append({"msg":"Category required"})
    if 'profile_pic' not in request_body:
        error_messages.append({"msg":"Profile pic required"})
    if 'email' not in request_body:
        error_messages.append({"msg":"Email required"})
    if 'address' not in request_body:
        error_messages.append({"msg":"Address required"})
    if 'description' not in request_body:
        error_messages.append({"msg":"Description required"})
       
    if not re.match('^(\w|\.|\_|\-)+[@](\w|\_|\-|\.)+[.]\w{2,8}$', request_body['email']):
        error_messages.append({'msg':'Enter a valid email format'})
    if len(error_messages) > 0:
        return jsonify(error_messages), 400

    email = User.query.filter_by(email=request_body['email']).first()

    if email:
        error_messages.append({'msg': 'This email already exists. Check your email'})
    if len(error_messages) > 0:
        return jsonify(error_messages), 400

    supplier = Supplier()
    supplier.name = request_body['name']
    supplier.phone_number = request_body['phone_number']
    supplier.category = request_body['category']
    supplier.email = request_body['email']
    supplier.address = request_body['address']
    supplier.schedule = request_body['schedule']
    supplier.rate = request_body['rate']
    supplier.comentaries = request_body['comentaries']
    supplier.description = request_body['description']
    supplier.member_since = request_body['member_since']
    supplier.image_url = request_body['image_url']
    supplier.is_active=True

    db.session.add(supplier)
    db.session.commit()

    response_body = {
        "msg": "The supplier was successfully created."
    }

    return jsonify(response_body), 200

@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    error_messages=[]
    
    if email is None:
        error_messages.append({"msg": "Email is required"})
    if password is None:
        error_messages.append({"msg": "Password is required"})
    if len(error_messages) > 0:
        return jsonify(error_messages), 400

    email = User.query.filter_by(email=email).one_or_none()

    if not email:
        return jsonify({"msg": "Email doesn't exist"}), 400
    if not email.check_password(password):
        return jsonify({"msg": "Invalid password"}), 401
    
    expiration = timedelta(days=1)
    access_token = create_access_token(identity=email, expires_delta=expiration)
    return jsonify('The login has been successful.', {'token':access_token}), 200