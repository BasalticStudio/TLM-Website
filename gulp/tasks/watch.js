/**
 * Watch Task
 */

const gulp = require('gulp')
const config = require('../config')
const browserSync = require('browser-sync')
const reload = browserSync.reload

gulp.task('watch', ['js', 'sass', 'html', 'images'], function() {
    browserSync({
        server: {
            open: config.browserSync.autoOpen,
            baseDir: config.browserSync.baseDir,
            routes: config.browserSync.routes
        }
    })

    console.log(config.browserSync);

    gulp.watch(config.javascript.src, ['js', reload])
    gulp.watch(config.images.src, ['images', reload])
    gulp.watch(config.html.src, ['html', reload])

    gulp.watch(config.sass.src, ['sass'])
})
