# angular_bootstrap

* Good start for all your angular projects
* Technologies used: Yeoman, Grunt, Bower, Angularjs, Bootstrap sass.


Objective
-------

Build a generic start for every angular project.

Help you to build a optimized and scalable project, ready for tests and deployable on different environment you can configure.

You want to use SVG images?

Just drop your svg images in the images/svg folders and you can use them via a sprite file using the css class 'svg-icon-%your_file_name%'.



Done
-------

* Create a git repository
* Create the app with yeoman 
* Use ui-rooter
* Split the app into modules
* Use Bootstrap-UI
* Load properly bootsrap SASS (in order to easily overwrite bootstrap variables)
* Create different environment build(dev, stagging, prod)
* Use wiredep to dynamically load bower dependencies (app & test)
* Use angular ngtemplates for caching your HTML templates with $templateCache.
* Create a REST API Call Factory
* Create a HTTP interceptor
* Handle server message error
* Use SvgIcons
* Unit test (karma)
* End to end test (protractor)
* Use John Papa Styles (https://github.com/johnpapa/angular-styleguide)


TODO
-------

* Migration to GULP

* Other improvements to come

## Requirements

- NPM (Comes with [Node.js](http://nodejs.org/))
- Ruby (comes pre-installed on Mac) - [installation guide](https://www.ruby-lang.org/en/installation/)
- SASS - [installation](http://sass-lang.com/install)
- Compass - [installation](http://compass-style.org/install/)

## How to run it
1. Clone the repository
2. Make sure you have Grunt and Bower installed `sudo npm install -g grunt grunt-cli bower`
3. Install dependencies `npm install && bower install` inside the project repository
4. Run server `grunt serve`
5. Check out the project at `http://localhost:9000/apps/index.html`

## Build
- Running `grunt build` builds the project into the dist directory.
- Running `grunt staging` builds the staging project into the dist directory.
- Running `grunt production` builds the production project into the dist directory.

You can for instance define 3 different API urls according if you are in dev, staging or production.


## Unit Testing

Running `grunt test` runs the unit tests with karma.

## End to end Testing

- Run `grunt serve` to launch your server.
- Run `grunt e2e` to open a browser and run the end to end tests with protractor(selenium).
The first test will take more time as selenium standalone and chromedriver are installed.
# angular_bootstrap_gulp
