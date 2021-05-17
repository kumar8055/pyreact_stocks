# pyreact_stocks
pyreact_stocks

## Enabling the virtual environment
```
cd testenv/
source Scripts/activate
```
# Creating django project
## Backend
```
django-admin startproject pyreactbkend
```
### Running django project
```
python manage.py startapp todo
python manage.py migrate
python manage.py runserver
```
> `Step-1`: Registering the todo application

Setup for the backend to recognise `todo` app
Let’s start with the more advanced things like registering the todo application as an installed app so that Django can recognise it. Open the backend/settings.py file and update the INSTALLED_APPS
```
# backend/settings.py

# Application definition
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'todo' # add this
  ]
```
> `Step-2`: Defining the Todo model at `todo/models.py` 

The completed property is the status of a task; a task will either be completed or not completed at any time. Because we have created a Todo model, we need to create a migration file and apply the changes to the database, so let’s run these commands:
```
python manage.py makemigrations todo
python manage.py migrate todo
```
>`Step-3`: Register your model in `todo/admin.py`
>`Step-4`: Create a super user
```
python manage.py createsuperuser

# Username (leave blank to use 'xxxxxx'):
# Email address: xxxxxx@gmail.com
# Password:
# Password (again):
# Superuser created successfully.
```
>`Step-5`: Add `localhost:3000` to whitelist in `todo/settings.py`
```
CORS_ORIGIN_WHITELIST = (
     'localhost:3000/'
 )
```
> `Step-6`: Create serializers for the Todo model `todo/serializers.py`
> `Step-7`: Create the view `todo/views.py`


FRONT END
===========
$ create-react-app stocksfe

You are running `create-react-app` 4.0.1, which is behind the latest release (4.0.2).

We no longer support global installation of Create React App.

Please remove any global installs with one of the following commands:
- npm uninstall -g create-react-app
- yarn global remove create-react-app

The latest instructions for creating a new app can be found here:
https://create-react-app.dev/docs/getting-started/

Let's start using new commands:
yarn create react-app `<appname>`

Success! Created stocksfe at C:/Users/PATH/stocksfe
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd stocksfe
  yarn start

Happy hacking!