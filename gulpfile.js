let gulp = require('gulp'),
    sass = require('gulp-sass'),
    pump = require('pump'),
    sourcemaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug');


gulp.task("sass", (callback) => {
    pump([
        gulp.src(['src/sass/style.scss']),
        sourcemaps.init(),
        sass(),
        sourcemaps.write("."),
        gulp.dest('public/css/')
    ], callback)
});


gulp.task("pug", (callback) => {
    pump([
        gulp.src(['src/pug/*.pug']),
        pug({pretty: true}),
        gulp.dest('public')
    ], callback)
});


gulp.task('watch', () => {
    gulp.watch(['src/**/*.*'], ['sass', 'pug']);
});