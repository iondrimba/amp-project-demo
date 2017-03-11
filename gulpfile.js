var gulp = require('gulp');
var purify = require('gulp-purifycss');

gulp.task('default', function() {
  return gulp.src('app.css')
    .pipe(purify(['*.html']))
    .pipe(gulp.dest('./dist/'));
});