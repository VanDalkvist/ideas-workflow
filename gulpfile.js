var gulp = require('gulp');
var mainNpmFiles = require('gulp-main-npm-files');

gulp.task('prepare', function() {
    return gulp.src(mainNpmFiles()).pipe(gulp.dest('./public/vendors'));
});
