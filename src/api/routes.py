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

@api.route('/', methods=['POST'])
def search():

    search = request.json.get("search", None)

    return jsonify(search), 200
    
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
