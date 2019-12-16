## Introduction

This is a Cafe Mac Review Web Application built off Django (including the Django REST Framework for API CRUD operations) and React.

The starter template used for the app can be found [here](https://scotch.io/tutorials/build-a-to-do-application-using-django-and-react).

## Requirements
* Python3
* For Mac users you may need to call ```$ python3 somecommand``` instead of ```$ python somecommand```
* Pipenv
* Pipenv takes care of most requirements. Make sure you have it installed.
* The perspectiveapi server must be installed. This is the text validator, which screens reviews for profanity. Clone this project into another separate directory and install and run it by following the instructions in the README: https://github.com/vichym/perspectiveapi-simple-server. This is the text validator, which screens for profanity.

## Getting Started
1. Clone the project to your machine ```$ git clone https://github.com/NatthaponSoisangwan/django-react``` or checkout from git in PyCharm.
2. Install Pipenv if not already installed. Creating the pipenv the first time may take a while. ```$ pip install pipenv```
3. Navigate into the directory ```$ cd django-react```
4. Source the virtual environment ```$ pipenv shell```
5. Install the pipenv dependencies. This may take a while. ```$ pipenv install```
5. Install the project dependencies. This may take a while. ```$ pipenv install -r requirements.txt```
6. Navigate into the frontend directory ```$ cd frontend```
8. Install yarn, see: [Yarn](https://yarnpkg.com/lang/en/docs/install/). Note that you also need node.js installed. [Nodejs](https://nodejs.org/en/)
7. Install the dependencies. You may ignore warnings. ```$ yarn install```
8. Upgrade dependencies. ```$ yarn upgrade```
8. Run frontend.```$ yarn start```
9. Run backend: Start new terminal window. Navigate to project and cd into backend directory (```$ cd backend```). Make migrations  (```$ python manage.py makemigrations```). Migrate server (```$ python manage.py migrate```). Then run backend server (```$ python manage.py runserver```)
10. Visit http://localhost:3000 to make sure that the react start screen works.
11. Visit http://localhost:8000/api/reviews to see the Django REST API, which allows you to see and edit reviews in the backend. Warning: Review titles adde via the API must be valid (exists as a food title in the Prepopulated data JSON file in the frontend/src/Components folder). Invalid titles will break the frontend.

At the end of the Getting Started Section, you should have the app running in a browser (http://localhost:3000). You must also have the perspectiveapi server running. Note that you can always access the website from any browser once the servers are running by going to (http://localhost:3000). The Edge browser is slow, Chrome is recommended. To get a mobile-like experience, access developer tools on Chrome or run the browser in windowed mode like a phone. The app can also be accessed on a phone (see https://docs.google.com/document/d/1Ps27RZfLg1lLbW_9zJyMSserA0G_R5keGrgEoZxD3wc/edit).

## Run the application (Use if everything has already been installed)
You will need three terminals: one pointed to the frontend, one for the backend, and the perspectiveapi server.

For the backend:
1. Run ```$ pipenv shell```. Run ```$ cd backend```
2. Run this command to start the backend server in the ```[backend]``` directory: ```$ python manage.py runserver```. To quit, Ctrl+C or CMD+C.

For the frontend:
1. Run ```$ pipenv shell```. Run ```$ cd frontend```
2. Run this command to start the frontend development server: ```[yarn start]``` (This will start the frontend on the adddress [localhost:3000](http://localhost:3000)). To quit, Ctrl+C or CMD+C.

For the perspectiveapi server:
1. Follow instructions in that project.

## Built With

* [React](https://reactjs.org) - A progressive JavaScript framework.
* [Python](https://www.python.org/) - A programming language that lets you work quickly and integrate systems more effectively.
* [Django](http://djangoproject.org/) - A high-level Python Web framework that encourages rapid development and clean, pragmatic design.
