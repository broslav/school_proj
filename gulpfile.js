let gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    pump = require('pump'),
    sourcemaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug'),
    utils =  require("postcss-utilities"),
    postcssUnits = require('postcss-units');


gulp.task("css", (callback) => {
    pump([
        gulp.src(['src/styles/style.css']),
        sourcemaps.init(),
        postcss([
            // postcssUnits({fallback: true}),
            require("postcss-import")(),
            utils(),
            require('postcss-font-magician')(),
            require("postcss-cssnext")(),
            require("postcss-browser-reporter")(),
            require("postcss-reporter")()]),
        sourcemaps.write("."),
        gulp.dest('./')
    ], callback)
});


gulp.task("pug", (callback) => {
    pump([
        gulp.src(['src/pug/*.pug']),
        pug({pretty: true}),
        gulp.dest('./')
    ], callback)
});


gulp.task('watch', () => {
    gulp.watch(['src/**/*.*'], ['css', 'pug']);
});