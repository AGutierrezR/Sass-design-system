const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildLibrary() {
  return src('library/**/*.scss').pipe(sass()).pipe(dest('css'))
}

function buildSass() {
  return src('scss/**/*.scss').pipe(sass()).pipe(dest('css'))
}

function watchTask() {
  watch(['library/**/*.scss'], buildLibrary)
  watch(['scss/**/*.scss'], buildSass)
}

exports.default = series(buildLibrary, watchTask)
exports.build = buildLibrary
exports.dev = series(buildSass, watchTask)
