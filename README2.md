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

# Git
git branch -a                   -> ver todos los branches
git branch <branch_name>        -> crear nuevo branch
git checkout <branch_name>      -> cambiar de branch
git merge <branch_name>         -> cambiar cambios en repositorio


git add .
git commit -m 'mensaje'
git push origin <branch_name>   -> subir los cambios al branch de uno
git pull origin main            -> actualizar los cambios del branch principal
