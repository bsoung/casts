var gulp = require('gulp');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var path = require('path');

gulp.task('css', function() {
	return gulp.src(
			[
				'./public/css/keyframes.css',
				'./public/css/materialize.min.css',
				'./public/css/style.css',
				'./public/css/swipebox.min.css',
				'./public/css/swiper.css'
			]
		)
		.pipe(minifyCSS())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie8', 'ie 9'))
		.pipe(gp_concat('style.min.css'))
		.pipe(gulp.dest('./public/build/css/'));
});

gulp.task('copy', function() {
	return gulp.src(
			['./public/font/**']
		)
		.pipe(gulp.dest('./public/build/fonts'));
});

gulp.task('js', function() {
	return gulp.src(
			[
				'./public/js/jquery-1.12.2.js',
				'./public/js/modernizr.js',
				'./public/js/jquery.swipebox.min.js',
				'./public/js/jquery.smoothState.min.js',
				'./public/js/materialize.min.js',
				'./public/js/swiper.min.js',
				'./public/js/jquery.mixitup.min.js',
				'./public/js/masonry.min.js',
				'./public/js/chart.min.js',
				'./public/js/functions.js'
			]
		)
		.pipe(gp_concat('gulp-concat.js'))
		.pipe(gulp.dest('./public/min/'))
		.pipe(gp_rename('vendor.min.js'))
		.pipe(gp_uglify())
		.pipe(gulp.dest('./public/build'))
});

gulp.task('watch', function() {
	gulp.watch(['./src/*/**.js', './src/*/*/**.js', './src/*/*/*/**.js'], ['css', 'js']);
});

gulp.task('default', ['css', 'copy', 'js', 'watch'], function() {});
gulp.task('prod', ['css', 'copy', 'js'], function() {});


