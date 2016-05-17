var gulp = require('gulp');
var sass = require('gulp-sass');

var path = ['node_modules/materialize-css/dist/**/*', 'node_modules/jquery/dist/**/*',
    'node_modules/plotly.js/dist/**/*', 'node_modules/ace-builds/src-min/**/*',
    'node_modules/jquery-sparkline/**/*', 'node_modules/typeahead.js/dist/**/*'];


gulp.task('default', ['sass', 'lib'], function() {

});

gulp.task('sass', function() {
    return gulp.src('*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('lib', function() {
    return gulp.src(path)
        .pipe(gulp.dest('lib'));
});
