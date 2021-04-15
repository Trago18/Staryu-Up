# Database
drop database example;
mysql -u root -e "CREATE DATABASE example";

# Backend
pipenv run init;
pipenv run migrate;
pipenv run upgrade;
pipenv run start

# Frontend
npm run start