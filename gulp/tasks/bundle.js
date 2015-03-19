/**
 * Bundle Task
 */

const gulp = require('gulp')

gulp.task('bundle', ['html:bundle', 'js:bundle', 'sass:bundle', 'images:bundle', 'bower:bundle'])
