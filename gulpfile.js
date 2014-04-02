var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
	gulp.src('bin/test/**/*.js')
		.pipe(mocha({reporter: 'list', growl: true})).on('error', function(){});
});

gulp.task('compile', function() {
  var coffeeCompile = function(src, dest) {
    gulp.src(src)
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest(dest));
  };

  coffeeCompile('src/**/*.coffee', 'bin');
  coffeeCompile('test/**/*.coffee', 'bin/test');

  gulp.src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('bin/lib'));
})

gulp.task('watch', function() {
	gulp.watch('./**/*.coffee', ['compile', 'test']);
});

gulp.task('default', ['compile', 'test', 'watch'])