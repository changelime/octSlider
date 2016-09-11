var gulp = require("gulp");
var babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");
var gulp_jspm = require("gulp-jspm"); 
var minify = require("gulp-minify");
var processhtml = require("gulp-processhtml");
var stripDebug = require("gulp-strip-debug");
var cleanCSS = require("gulp-clean-css");

gulp.task("js", function() {
  return gulp.src("src/js/octSlider.js")
    .pipe(sourcemaps.init())
    .pipe(babel({
          presets: ["es2015"]
    }))
    .pipe(stripDebug())
    .pipe(minify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/js"));
});
gulp.task("css", function() {
  return gulp.src("src/css/octSlider.css")
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"));
});
gulp.task("demo-html", function() {
  return gulp.src("src/demo/index.html")
    .pipe(processhtml())
    .pipe(gulp.dest("dist/demo"));
});
gulp.task("demo-js", function() {
  return gulp.src("src/demo/js/index.js")
    .pipe(sourcemaps.init())
    .pipe(gulp_jspm({selfExecutingBundle: true}))
    .pipe(stripDebug())
    .pipe(minify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/demo/js"));
});

gulp.task("built", ["js", "css", "demo-html", "demo-js"]);