var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var path = require('path');
var svgmin = require('gulp-svgmin');



// SVG Sprite
// -------------------------------------
gulp.task('svg', function() {
  var svgs = gulp.src('icons/*.svg')
  .pipe(svgmin(function(file) {
    var prefix = path.basename(file.relative, path.extname(file.relative));
    return {
      plugins: [{
        cleanupIDs: {
          prefix: prefix + '-',
          minify: true
        }
      }]
    }
  }))
  .pipe(svgstore( { inlineSvg: true }))
  .pipe(gulp.dest('output/'))

  // function fileContents(filePath, file) {
  //   return file.contents.toString();
  // }

});








gulp.task('default', ['svg']);