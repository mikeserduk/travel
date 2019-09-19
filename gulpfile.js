let gulp = require('gulp');
 let less = require('gulp-less');

gulp.task('build', function () {
  return gulp.src('less/style.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});