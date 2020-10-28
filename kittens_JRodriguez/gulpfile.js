const { src,dest,watch,parallel,series } = require("gulp");
const sass = require('gulp-sass');
const minimitzaCSS = require('gulp-clean-css');
const minimitzaJS = require('gulp-uglyfly');
const concat = require('gulp-concat');
const babel = require('gulp-babel');




function compilaSASS(){
    return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function sassWatch(){
    watch('sass/**/*.scss', compilaSASS);
}

function minifyCSS(){
    return src('css/*.css',)
    .pipe(minimitzaCSS())
    .pipe(dest('dist/css'))
}

function minifyJS(){
    return src('js/*.js')
    .pipe(minimitzaJS())
    .pipe(dest('dist/js'))
}

function concatenaCSS(){
    return src('dist/css/*.css')
    .pipe(concat('all.css'))
    .pipe(dest('dist/css'))
}

function concatenaJS(){
    return src(['dist/js/modernizr-2.5.2.min.js','dist/js/jquery-2.1.0.min.js','dist/js/application.js'])
    .pipe(concat('all.js'))
    .pipe(dest('dist/js'))
}

function babelJS(){
    return src('dist/js/all.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('all-babel.js'))
    .pipe(dest('dist/js'))
}

exports.sass = compilaSASS;
exports.sassWatch = sassWatch;
exports.minimitzaCSS = minifyCSS;
exports.minimitzaJS = minifyJS;
exports.concatCSS = concatenaCSS;
exports.concatJS = concatenaJS;
exports.babel = babelJS;
exports.kittens = series(compilaSASS,parallel(minifyCSS, minifyJS), parallel(concatenaCSS,concatenaJS), babelJS);