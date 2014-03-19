var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
	gulp.src('test/**/*.coffee')
		.pipe(coffee({bare: true}).on('error', gutil.log))
		.pipe(gulp.dest('test'))
		.pipe(mocha({reporter: 'list'}));
});
