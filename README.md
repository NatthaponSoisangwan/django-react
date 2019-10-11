## Introduction

This is a simple Todo application built off Django (including the Django REST Framework for API CRUD operations) and React.

Refer to the original template built [here](https://scotch.io/tutorials/build-a-to-do-application-using-django-and-react) for step-by-step development/installation.

## Requirements
* Python3
* Pipenv

## Getting started
1. Clone the project to your machine ```$ git clone https://github.com/NatthaponSoisangwan/django-react``` or checkout from git in PyCharm.
2. Navigate into the directory ```$ cd django-react```
3. Source the virtual environment ```$ pipenv shell```
4. Install the dependencies ```$ pipenv install```
5. Navigate into the frontend directory ```$ cd frontend```
5. Install the dependencies ```$ npm install```
6. Install yarn in the frontend directory, see: [Yarn](https://yarnpkg.com/lang/en/docs/install/). Note that you also need node.js installed. [Nodejs](https://nodejs.org/en/)
7. Run ```$ yarn add bootstrap reactstrap```


## Run the application
You will need two terminals pointed to the frontend and backend directories to start the servers for this application.
ALWAYS run in the virtual environment: ```$ pipenv shell``` in the main directory

1. Run this command to start the backend server in the ```[backend]``` directory: ```$ python manage.py runserver``` (You have to run this command while you are sourced into the virtual environment)
2. Run this command to start the frontend development server: ```[yarn start]``` (This will start the frontend on the adddress [localhost:3000](http://localhost:3000))

## Built With

* [React](https://reactjs.org) - A progressive JavaScript framework.
* [Python](https://www.python.org/) - A programming language that lets you work quickly and integrate systems more effectively.
* [Django](http://djangoproject.org/) - A high-level Python Web framework that encourages rapid development and clean, pragmatic design.