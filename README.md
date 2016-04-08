# angular_bootstrap

* Good start for all your angular projects
* Technologies used: Yeoman, Gulp, Bower, Angularjs, Bootstrap sass.


Objective
-------

Build a generic start for every angular project.

Help you to build a optimized and scalable project, ready for tests and deployable on different environment you can configure.




Done
-------

* Use ui-rooter
* Split the app into modules
* Load properly bootsrap SASS (in order to easily overwrite bootstrap variables)
* Create different environment build(dev, stagging, prod)
* Use wiredep to dynamically load bower dependencies (app & test)
* Create a REST API Call Factory
* Create a HTTP interceptor
* Handle server message error
* Use John Papa Styles (https://github.com/johnpapa/angular-styleguide)
* Use $httpBackend to mock REST API up in development environment

TODO
-------

* Update unit testand e2e test


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
- Running `gulp serve-dev-build` builds the project into the dist directory.
- Running `gulp serve-staging-build` the staging project into the dist directory.
- Running `gulp serve-production-build` builds the production project into the dist directory.

You can for instance define 3 different API urls according if you are in dev, staging or production.


## Unit Testing

TODO: Running `gulp test` runs the unit tests with karma.

## End to end Testing

TODO
- Run `gulp e2e` to open a browser and run the end to end tests with protractor(selenium).

The first test will take more time as selenium standalone and chromedriver are installed.

# angular_bootstrap_gulp
