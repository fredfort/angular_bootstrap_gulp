// include gulp
var gulp    = require('gulp'),
connect     = require('gulp-connect'),
sass        = require('gulp-sass'),
inject      = require('gulp-inject'),
useref      = require('gulp-useref'),
uglify      = require('gulp-uglify'),
gulpif      = require('gulp-if'),
cleanCSS    = require('gulp-clean-css'),
htmlmin     = require('gulp-htmlmin'),
svgmin      = require('gulp-svgmin');
browserSync = require('browser-sync'),
servers     = require('./resources/build-tools/serverConfig').config,
proxy       = require('proxy-middleware'),
url         = require('url'),
del         = require('del'),
ngAnnotate  = require('gulp-ng-annotate'),
replace     = require('gulp-replace-task'),
ngTemplates = require('gulp-ng-templates');



//Define variables
var buildDirectory = './dist';
var rootDirectory = './app';

var jsFiles    = ['./app/scripts/*.js', './app/scripts/**/*.js', './app/modules/**/scripts/**/*.js'];
var htmlFiles  = ['./app/*.html', './app/views/*.html', './app/modules/**/views/*.html'];//index.html will be copied with useref
var scssFiles  = ['./app/**/*.scss','./app/modules/**/styles/*.scss'];
var imgFiles   = ['./app/images/svg/*'];

var allFiles = jsFiles.concat(htmlFiles).concat(scssFiles).concat(imgFiles);


/*
* Check variables 
*/
gulp.task('checkVariables',function(){
  console.log('jsFiles',jsFiles);
  console.log('htmlFiles',htmlFiles);
  console.log('cssFiles',scssFiles);
  console.log('allFiles',allFiles);
});

/*
* Code quality control
*/
gulp.task('lint', function () {
    return gulp.src(jsFiles)
            .pipe(jshint())
            .pipe(jshint.reporter('jshint-stylish'));
});


/*
* Clean dist repository
*/
gulp.task('clean', function (cb) {
    return del(buildDirectory,cb);
});


/*
* Compile all scss files into one css file
*/
gulp.task('sass', function () {
  return gulp.src(scssFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(rootDirectory));
});


/*
* Read index.js, concat external files and import the file created
*/
gulp.task('useref',['clean'], function () {
    return gulp.src('app/index.html')
        .pipe(useref())
        .pipe(gulpif('*.js',  ngAnnotate()))
        .pipe(gulpif('*.js',  uglify()))
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(gulp.dest(buildDirectory));
});


/*
* Minify and copy HTML files for production/staging build
*/
gulp.task('copyHTML',['clean'],function(){
    var opts = {collapseWhitespace: true};
    var exclude = ['!./app/index.html'];
    return gulp.src(htmlFiles.concat(exclude), {base: rootDirectory})
        .pipe(htmlmin(opts))
        .pipe(gulp.dest(buildDirectory));
});


/*
* Minify and copy Images files for production/staging build
*/
gulp.task('copyImages',['clean'],function(){
    var exclude = [];
    return gulp.src(imgFiles.concat(exclude), {base: rootDirectory})
        .pipe(svgmin())
        .pipe(gulp.dest(buildDirectory));
});

/*
* Copy the config file
*/
gulp.task('copyConfig',['clean','useref'], function(){
    return gulp.src(['./app/config/config.js'])
        .pipe(gulp.dest(buildDirectory+'/config/'));
});


/*
* Bootstrap real app
*/
gulp.task('bootstrap-api', ['useref'],function () {
  console.log(buildDirectory+'/index.html');
  gulp.src(buildDirectory+'/index.html')
    .pipe(replace({
      patterns: [
        {
          match: /appStub/g,
          replacement: function () {
            return 'angular.bootstrap'; // replaces "foo" to "bar" 
          }
        }
      ]
    }))
    .pipe(gulp.dest(buildDirectory));
});


/*
* Configure environments
*/

//Create the config.js according the json given
var replaceConfig = function(currentConfigFile){
  return  gulp.src('app/config/template/config.js')
    .pipe(replace({patterns: [ { json: currentConfigFile }]}))
    .pipe(gulp.dest('app/config/'));
}

//Create configuration file for dev environement
gulp.task('replace-dev',['clean'], function () {
  currentConfigFile = require('./app/config/environments/dev.json');
  return replaceConfig(currentConfigFile);
});

//Create configuration file for Staging environement
gulp.task('replace-staging',['clean'], function () {
  currentConfigFile = require('./app/config/environments/staging.json');
  return replaceConfig(currentConfigFile);
});

//Create configuration file for Production environement
gulp.task('replace-production',['clean'], function () {
  currentConfigFile = require('./app/config/environments/production.json');
  return replaceConfig(currentConfigFile);
});


/*
* Run developement build for local development/testing: Data provided locally from http://localhost:3005/
*/
gulp.task('serve', ['sass'], function () {

    var restServer = browserSync.create("restServer");
     restServer.init(servers.dev.stubConf);

    var restLocation = url.parse('http://localhost:3005');
    restLocation.route = '/api';

    var devServer = browserSync.create("developmentServer");
    devServer.init(servers.dev.getConf(proxy, restLocation));

    gulp.watch(jsFiles ,   {} , devServer.reload);
    gulp.watch(htmlFiles,  {} , devServer.reload);
    gulp.watch(scssFiles , {} , ['sass', devServer.reload]); 
});


/*
* Build the application into a production one ( concatenate/minify files)
*/
gulp.task('build',['clean','useref','copyHTML','copyImages','copyConfig']);


/*
* Serve environment specific builds
*/
gulp.task('serve-dev-build', ['replace-dev','build'], function () {
    connect.server({ root: buildDirectory, port: 8989});
});
gulp.task('serve-staging-build', ['replace-staging','build','bootstrap-api'], function () {
    connect.server({ root: buildDirectory, port: 8989});
});
gulp.task('serve-production-build', ['replace-production','build','bootstrap-api'], function () {
    connect.server({ root: buildDirectory, port: 8989});
});



/*
* Default task
*/
gulp.task('default',['serve']);