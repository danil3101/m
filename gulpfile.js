var gulp 			= require("gulp");
var livereload      = require('gulp-livereload');

gulp.task('css', function () {
	gulp.src("./css/**/*.css")
	.pipe(livereload());
});

gulp.task('html', function() {
	gulp.src('./index.html')
	.pipe(livereload());
});

gulp.task('js', function() {
	gulp.src('./js/**/*.js')
	.pipe(livereload());
});

gulp.task('default', function () {
	livereload.listen();
	gulp.watch('./css/**/*.css', ['css']);
	gulp.watch('./index.html', ['html']);
    gulp.watch('./script/*.js', ['js']);
});