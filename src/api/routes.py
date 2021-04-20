"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Supplier, Favorites, Commentaries
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, current_user, jwt_required, JWTManager
from datetime import timedelta
import re


api = Blueprint('api', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/data-test', methods=['GET'])   # datos de prueba
def data_test():
    user=User(first_name='nombre1', last_name='apellido1', phone_number='numero1', email='test1@gmail.com', password='Pass123*', is_active=True)
    db.session.add(user)
    user=User(first_name='nombre2', last_name='apellido2', phone_number='numero2', email='test2@gmail.com', password='Pass234*', is_active=True)
    db.session.add(user)

    suppiler=Supplier(name='proveedor1', phone_number='numero1', email='test1@gmail.com', category='random', profile_pic='url', address='cr', description='test', rate=5, member_since='2021', is_active=True, user_id=1)
    db.session.add(suppiler)
    suppiler=Supplier(name='proveedor2', phone_number='numero2', email='test2@gmail.com', category='random', profile_pic='url', address='cr', description='test', rate=5, member_since='2021', is_active=True, user_id=1)
    db.session.add(suppiler)
    suppiler=Supplier(name='proveedor3', phone_number='numero3', email='test3@gmail.com', category='random', profile_pic='url', address='cr', description='test', rate=5, member_since='2021', is_active=True, user_id=2)
    db.session.add(suppiler)

    db.session.commit()
    return jsonify("ok"), 200


@api.route('/', methods=['POST'])   # Barra de busqueda
def search():

    search = request.json.get("search", None)

    supplier = Supplier.query.filter_by(name=search).all()
    all_suppliers = list(map(lambda x: x.serializeSearch(), supplier))

    return jsonify(all_suppliers), 200
  
@api.route("/login", methods=["POST"])  # Login
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

    #return jsonify('The login has been successful.'), 200
    
@api.route("/user/<int:id>", methods=["GET"])   # Datos del perfil del usuario
def get_user(id):

    user = User.query.filter_by(id=id).all()
    user = list(map(lambda x: x.serialize(), user))

    return jsonify(user), 200

@api.route("/supplier/<int:id>", methods=["GET"])   # Datos del perfil de proveedor
def get_supplier(id):

    supplier = Supplier.query.filter_by(id=id).all()
    supplier = list(map(lambda x: x.serialize(), supplier))

    return jsonify(supplier), 200

@api.route('/user_signup', methods=['POST'])    # Creacion de nuevo usuario
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

@api.route('/supplier_signup', methods=['POST'])    # Creacion de nuevo proveedor
def create_supplier():

    request_body = request.get_json()
    error_messages=[]

    if 'name' not in request_body:
        error_messages.append({"msg":"Name required"})
    if 'phone_number' not in request_body:
        error_messages.append({"msg":"Phone number required"})
    if 'category' not in request_body:
        error_messages.append({"msg":"Category required"})
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
    supplier.description = request_body['description']
    supplier.user_id = request_body['user_id']

    if 'schedule' not in request_body:
        supplier.schedule = None
    else:
        supplier.schedule = request_body['schedule']
    
    supplier.rate = 5
    supplier.member_since = datetime.datetime.now().strftime("%x")
    supplier.is_active=True

    db.session.add(supplier)
    db.session.commit()

    response_body = {
        "msg": "The supplier was successfully created."
    }

    return jsonify(response_body), 200

@api.route('/supplier/<int:id>/rate', methods=['GET'])     # obtener calificacion del proveedor
def get_rate(id):

    supplier = Supplier.query.filter_by(id=id).first()
    return jsonify(rate=supplier.rate), 200

@api.route('/supplier/<int:id>/rate', methods=['POST'])     # calificar al proveedor
def add_rate(id):

    rate = request.json.get("rate", None)
    supplier = Supplier.query.filter_by(id=id).first()
    supplier.rate = (supplier.rate + rate)/2
    db.session.commit()

    return jsonify(rate=supplier.rate), 200

@api.route('/supplier/<int:id>/comment', methods=['GET'])      # obtener comentarios del proveedor
def get_comment(id):

    commentaries = Commentaries.query.filter_by(supplier_id=id).all()
    all_commentaries = list(map(lambda x: x.serialize(), commentaries))

    return jsonify(all_commentaries), 200

@api.route('/supplier/<int:id>/comment', methods=['POST'])      # comentario al proveedor
def add_comment(id):

    comment = request.json.get("comment", None)
    commentaries = Commentaries(message=comment, user_id=1, supplier_id=id)
    db.session.add(commentaries)
    db.session.commit()
    
    commentaries = Commentaries.query.filter_by(supplier_id=id).all()
    all_commentaries = list(map(lambda x: x.serialize(), commentaries))

    return jsonify(all_commentaries), 200

@api.route('/favorite', methods=['GET'])      # obtener proveedor en favoritos
def get_favorite():

    favorites = Favorites.query.filter_by(user_id=1).all()
    all_favorites = list(map(lambda x: x.serialize(), favorites))

    return jsonify(all_favorites), 200

@api.route('/favorite', methods=['POST'])      # agregar proveedor a favoritos
def add_favorite():

    favorite = request.json.get("favorite", None)

    favorites = Favorites.query.filter_by(supplier_id=favorite, user_id=1).first()
    if favorites == None:
        favorites = Favorites(supplier_id=favorite, user_id=1)
        db.session.add(favorites)
        db.session.commit()
    else:
        return jsonify({'msg': 'This supplier is already in favorites.'})
    
    favorites = Favorites.query.filter_by(user_id=1).all()
    all_favorites = list(map(lambda x: x.serialize(), favorites))

    return jsonify(all_favorites), 200

@api.route('/favorite', methods=['DELETE'])     # eliminar proveedor de favoritos
def delete_favorite():

    favorite = request.json.get("favorite", None)

    favorites = Favorites.query.filter_by(supplier_id=favorite, user_id=1).first()
    db.session.delete(favorites)
    db.session.commit()

    favorites = Favorites.query.filter_by(user_id=1).all()
    all_favorites = list(map(lambda x: x.serialize(), favorites))

    return jsonify(all_favorites), 200