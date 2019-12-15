## Introduction

This is a simple Todo application built off Django (including the Django REST Framework for API CRUD operations) and React.

Refer to the original template built [here](https://scotch.io/tutorials/build-a-to-do-application-using-django-and-react) for step-by-step development/installation.

## Requirements
* Python3
* For Mac users you may need to call ```$ python3 somecommand``` instead of ```$ python somecommand```
* Pipenv
* Pipenv takes care of most requirements. Make sure you have it installed.

## Getting started
1. Clone the project to your machine ```$ git clone https://github.com/NatthaponSoisangwan/django-react``` or checkout from git in PyCharm.
2. Install Pipenv if not already installed ```$ pip install pipenv```
3. Navigate into the directory ```$ cd django-react```
4. Source the virtual environment ```$ pipenv shell```
5. Install the dependencies ```$ pipenv install```
6. Navigate into the frontend directory ```$ cd frontend```
7. Install the dependencies ```$ npm install -g```
8. Install yarn in the frontend directory, see: [Yarn](https://yarnpkg.com/lang/en/docs/install/). Note that you also need node.js installed. [Nodejs](https://nodejs.org/en/)
9. Run ```$ npm install -g create-react-app```
10. Visit http://localhost:3000 to make sure that the react start screen works.
11. Run ```$ yarn add bootstrap reactstrap```
12. Run ```$ yarn add axios```


## Run the application
You will need two terminals pointed to the frontend and backend directories to start the servers for this application.
ALWAYS run in the virtual environment: ```$ pipenv shell``` in the main directory

1. Run this command to start the backend server in the ```[backend]``` directory: ```$ python manage.py runserver``` (You have to run this command while you are sourced into the virtual environment)
2. Run this command to start the frontend development server: ```[yarn start]``` (This will start the frontend on the address [localhost:3000](http://localhost:3000)) To quit, Ctrl+C or CMD+C.

## Built With

* [React](https://reactjs.org) - A progressive JavaScript framework.
* [Python](https://www.python.org/) - A programming language that lets you work quickly and integrate systems more effectively.
* [Django](http://djangoproject.org/) - A high-level Python Web framework that encourages rapid development and clean, pragmatic design.
