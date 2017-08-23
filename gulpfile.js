var gulp = require('gulp'),
  browserify = require('gulp-browserify');

gulp.task('js', function() {
  return gulp.src('./src/js/**/*')
    .pipe(browserify({transform: ['reactify', 'babelify']}))
    .pipe(gulp.dest('./static/js'))
    .pipe(require('gulp-size')());
});

gulp.task('css', function() {
  return gulp.src('./src/css/**/*')
    .pipe(gulp.dest('./static/css'));
});

gulp.task('process', ['js', 'css'], function () {
  gulp.watch('./src/js/**/*', ['js']);
  gulp.watch('./src/css/**/*', ['css']);
});

gulp.task('run', function () {
  var spawn = require('child_process').spawn;
  var display = spawn('python', ['display.py']);

  gulp.start('process');
});

gulp.task('default', ['run'], function () {
  console.log("Hello, World!");
});
