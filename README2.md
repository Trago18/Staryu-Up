# Database
psql
\l
:q
drop database example;
create database example;
\q

# Backend
pipenv run init;
pipenv run migrate;
pipenv run upgrade;
pipenv run start

# Frontend
npm run start