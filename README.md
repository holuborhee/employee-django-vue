# Employee (Django + Vue)

This is a sample repo that demonstrate the use of Django with VueJS, a test app that shows how VueJS can be integrated with Django framework

## Technologies used

- Django
- VueJS
- Webpack
- Babel
- NPM

## How to setup

### Pre-install Requirements

- Python 3
- NodeJS and NPM
- virtualenv

### Python

- Clone the repo `$ git clone https://github.com/holuborhee/employee-django-vue.git`
- Navigate to the project directory `$ cd employee-django-vue/`
- Create a virtual environment `$ virtualenv --python=`which python3` venv`
- Activate your virtual environment `$ source venv/bin/activate`
- Navigate to the employee app `$ cd employee`
- Start the server `$ python manage.py runserver`

Application is started at 
```sh
127.0.0.1:8000
```

### VueJS

- Install project dependencies `$ npm install` (in the root of the project)
- Bundle and Run `$ npm run watch`

Navigate to employee URL 
```sh
127.0.0.1:8000/employees
```

## Todo

- Create the python Project
- Setup Webpack and Babel
- Integrate VueJs for the frontend
- Create a README
- Host on Heroku
- Add a Landing Page
- Implement Create a New Employee
- Implement Display Employee Details
- Add Vue Router
- Write a Descriptive Blog Post
- Create a python package

License
----

MIT

***

Contributing
---
This project currently does not accept contribution to the code, **but if you encounter any error or issue while setting up, or you have a suggestion on how this can be made better, you can mention in issues.**

Made with ❤ by [me](https://twitter.com/holuborhee) 
