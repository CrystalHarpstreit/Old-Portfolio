var gulp = require('gulp');
var webserver = require('gulp-webserver');
var shell = require('gulp-shell');

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: false,
      port: 8080
    }));
});

gulp.task('compile', shell.task([
  'harp compile _blog/ blog/'
]));

gulp.task('watch', function() {
  var watcher = gulp.watch('_blog/**', ['compile']);
});

gulp.task('default', ['compile', 'webserver', 'watch']);
