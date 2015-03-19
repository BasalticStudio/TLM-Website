/**
 * Browserify Task
 */

const gulp = require('gulp')
const gutil = require('gulp-util')
const config = require('../config').javascript
const browserify = require('gulp-browserify')
const uglify = require('gulp-uglify')
const size = require('gulp-size')

gulp.task('js', function() {
    return gulp.src(config.src)
               .pipe(browserify({
                   transform: ['babelify'],
                   debug: true
               }))
               .on('error', gutil.log)
               .pipe(gulp.dest(config.tmp))
               .pipe(size({title: 'javascript'}))
})

gulp.task('js:bundle', function() {
    return gulp.src(config.src)
               .pipe(browserify({
                   transform: ['babelify'],
                   debug: false
               }))
               .pipe(uglify())
               .pipe(gulp.dest(config.dest))
               .pipe(size({title: 'javascript'}))
})
