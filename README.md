Equifit POC
===========

Equifit Forms proof of concept project

This app features a complete backend using node.js with ExpressJS, a data layer using MongoDB with Mongoose, and a complete front-end application built using Backbone.js (with Backbone LayoutManager and Backfone Forms).


## Requirements

node 0.10+ (and npm), mongodb - visit nodejs.org and mongodb.com to download
each.

    $ sudo npm install -g grunt-cli
    $ npm install
    $ cd public && bower install  (install bootstrap 2 and jquery)
    $ cd apps/equifit && bower install (install local packages for equifit sub app)

## Running the App:

Start MongoDB
	
	$ mongod

Start the server in DEV mode, with nodemon watching the app for a relaunch,
watchers on scripts and less files for rebuild.

    $ npm start