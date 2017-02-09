/* API 仕様書作成 */
const gulp = require('gulp');
const concat = require('gulp-concat');
const aglio = require('gulp-aglio');
const webserver = require('gulp-webserver');

const src="docs";
const dest="target/docs"

gulp.task('makeDocs', function() {
    gulp.src([
        `${src}/header.md`,
        `${src}/dataStructure.md`,
        `${src}/shops.md`,
        `${src}/myPages.md`
    ])
        .pipe(concat('index.md'))
        .pipe(gulp.dest(dest))
        .pipe(aglio({template: 'default'}))
        .pipe(gulp.dest(dest));
});

gulp.task('viewDocs', function() {
    gulp.src(dest)
        .pipe(webserver({
            livereload: true,
            port: 8001,
            open: true
        }));
});

gulp.task('debugDocs', ["makeDocs", "viewDocs"], function() {
    gulp.watch(`${src}/**`, ["makeDocs"]);
});

