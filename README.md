Equifit POC
===========

Equifit Forms proof of concept project

This app features a complete backend using node.js with ExpressJS, a data layer using MongoDB with Mongoose, and a complete front-end application built using Backbone.js (with Backbone LayoutManager and Backfone Forms, Bootstrap 2.3 and LESS).
Test runner Karma with Jasmine.

Idea to build main app with sub apps in it. Every app is independent from each other (Node packages, Bower components and Grunt Task Runner)
but they still share same CSS to keep consistent looking field.



## Requirements

node 0.10+ (and npm), mongodb - visit nodejs.org and mongodb.com to download
each.

### Build main app

    $ sudo npm install -g grunt-cli
    $ npm install
    $ cd public/
    $ bower install  (install bootstrap 2.3 and jquery)

### Build sub app

    $ cd apps/equifit
    $ npm install
    $ bower install (install local npm packages and bower components for equifit sub app)


## Init App and Sub App

	$ cd public/
	$ grunt

## Running the App:

Start MongoDB

	$ mongod

Start the server in DEV mode, with nodemon watching the app for a relaunch,
watchers on scripts and less files for rebuild.

    $ npm start