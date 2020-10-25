const gulp = require('gulp');
const rename = require('gulp-rename');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

gulp.task('webpack-stream-webpack-5', function () {
    return gulp
        .src('./src/js/entry.js')
        .pipe(webpackStream({}, webpack))
        .pipe(rename('bundle.webpack-stream-webpack-5.js'))
        .pipe(gulp.dest('./dist/js/'))
});

gulp.task('webpack-stream', function () {
    return gulp
        .src('./src/js/entry.js')
        .pipe(webpackStream({}))
        .pipe(rename('bundle.webpack-stream-only.js'))
        .pipe(gulp.dest('./dist/js/'))
});

gulp.task('default', gulp.series('webpack-stream', 'webpack-stream-webpack-5'));