var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    autoprefix = require('gulp-autoprefixer'),
    notify = require('gulp-notify');

var config = {
  sassPath: 'src/website/resources/scss',
  jsPath: 'src/website/resources/js',
  targetPath: 'src/website/static',
  npmDir: 'node_modules'
};

// compile sass
gulp.task('sass', function() {
  return gulp.src(config.sassPath + '/styles.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: [
        config.sassPath,
        config.npmDir + '/bootstrap/scss',
        config.npmDir + '/fontawesome/scss',
      ]
    }))
    .on('error', notify.onError(function(error){
      return 'Error: ' + error.message;
    }))
    .pipe(autoprefix('last 2 version'))
    .pipe(gulp.dest(config.targetPath + '/css'));
});

// compile js
gulp.task('js', function() {
  return gulp.src(config.jsPath + '/*.js')
    .pipe(concat('scripts.js'))
    .on('error', notify.onError(function(error){
      return 'Error: ' + error.message;
    }))
    .pipe(gulp.dest(config.targetPath + '/js'));
});


// watch for changed sass files
gulp.task('sass:watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['sass']);
});

// watch for changed js files
gulp.task('js:watch', function() {
    gulp.watch(config.jsPath + '/**/*.js', ['js']);
});

// default task
gulp.task('default', ['sass', 'sass:watch', 'js', 'js:watch']);

// default task
gulp.task('build', ['sass', 'js']);