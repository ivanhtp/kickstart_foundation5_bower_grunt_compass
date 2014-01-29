# Kickstarter Structure for Interface Projects

Full working blank project for Foundation, Compass and Grunt lovers!

## Features

  * Foundation 5
  * Node.js
  * Sass and Compass
  * Bower for assets organization 
  * Grunt.js for building (and many tasks already configured!)
  * Great file/folder organization!
  * One command build and deploy
  * 100% upgradable


## Quickstart

  First of all, you need to install the applications below:
  * Git (dah!)
  * Ruby 1.9 or higher
  * [Node.js](http://nodejs.org)
  
  Use the Node.js package manager (you may have it, if you have Node installed) to install [bower](http://bower.io) and [grunt.js](http://bower.io) : 
  * `[sudo] npm install -g bower grunt-cli`

  Now, we will user the Ruby package manager to install Compass
  * `[sudo] gem install compass`

  Finally, install Foundation
  * `[sudo] gem install foundation`
  
  Well done, now you have all the requirements to get this project working!


## Downloading

  Just download and unzip or clone the project inside the folder you want
  * [Download](https://github.com/ivanhtp/kickstart_foundation5_bower_grunt_compass/archive/master.zip) or clone: `git clone https://github.com/ivanhtp/kickstart_foundation5_bower_grunt_compass.git`
  
  Now just open your folder and run:
  * `grunt`


## Folder Structure
  
  This project is organized following the structure below:

  __bower_components__ - All the assets and libs used in this project: Foundation, modernizr, jquery, etc...
  __node_modules__     - All plugins used by grunt and modules from Node: clean, uglify, compass, etc... 
  __scss__             - The global style of application goes here, basically your foundation overrides.      
  __img__              - Put your images here, they will be joined into a sprite in development/img. 
  __development__      - Your HTML files and javascripts only. Grunt will bring images and css for you, don't worry.   
  __build__            - Here goes your project ready for run. Deploy? Just copy this folder and be happy. DON'T CODE ANYTHING HERE!!!     



## Configuration Files!

  * __config.rb__ - Compass configuration file. Don't edit it unless you know what you're doing.
  * __bower.json__ - Bower assets dependencies goes here. Write any bower dependency you'll need and run `bower install`.
  * __package.json__ - Project version information for building. Project name, author, version goes here.
  * __Gruntfile.js__ - This file is to Grunt, what bower.json is to bower. Here goes Grunt dependencies/plugins and its configurations. Like bower, if you add a new dependency, run `npm install` to download the new dependencies
  

## Upgrading

 If you'd like to upgrade to a newer version of Foundation down the road just run:

 ```bash
 bower update
 ```
 
 ## About
 This project was created by Ivan Pauletti | @ivanhtp | ivanpauletti [at] gmail.com.
 
