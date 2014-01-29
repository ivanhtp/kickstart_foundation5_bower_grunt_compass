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
  * Ruby 1.9+
  * [Node.js](http://nodejs.org)
  
  Use the Node.js package manager (you may have it, if you have Node installed) to install [bower](http://bower.io) and [grunt.js](http://bower.io) : 
  * `[sudo] npm install -g bower grunt-cli`

  Now, we will user the Ruby package manager to install Compass
  * `[sudo] gem install compass`

  Finally, install Foundation
  * `[sudo] gem install foundation`
  
  Well done, now you have all the requirements to get this project working!


## Downloading

  Now is just download and unzip or clone the project inside the folder you want
  * [Download](https://github.com/ivanhtp/kickstart_foundation5_bower_grunt_compass/archive/master.zip)
  * Or clone: `git clone https://github.com/ivanhtp/kickstart_foundation5_bower_grunt_compass.git`
  
  Now just open your folder and run:
  * `grunt`
  
  Voila. 
    

## Folder Structure
  
  This project is organized following the structure below:
  * 'bower_components' - __All the assets and libs used in this project: Foundation, modernizr, jquery, etc...__
  * 'node_modules' - __All plugins used by grunt and modules from Node: clean, uglify, compass, etc...__
  * 'scss' - __The global style of application goes here, basically your foundation overrides...__
  * 'img' - __Put your images here, they will be joined into a sprite in development/img...__
  * 'development' - __Your HTML files and javascripts only. Grunt will bring images and css for you, don't worry__
  * 'build' - __Here goes your project ready for run. Deploy? Just copy this folder and be happy. DON'T CODE ANYTHING HERE!!!__


## Upgrading

 If you'd like to upgrade to a newer version of Foundation down the road just run:

 ```bash
 bower update
 ```
