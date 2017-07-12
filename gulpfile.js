const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const copy = require('gulp-copy');

gulp.task('fileinclude', () => {
  gulp.src(['src/html/**.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      context: {
        js: '../js',
        css: '../css',
        image: '../static/image'
      }
    }))
    .pipe(gulp.dest('dist/html'));
});

gulp.task('copy', () => {
  // 插件复制
  gulp.src(['node_modules/vue/dist/vue.js', 'src/js/*.js'])
    .pipe(gulp.dest('dist/js'));

  // 样式复制
  gulp.src(['src/css/*.css'])
    .pipe(gulp.dest('dist/css'));
});

gulp.task('staticCopy', () => {
  // 静态文件复制
  gulp.src(['static/**/*'])
    .pipe(gulp.dest('dist/static'));
});

gulp.task('default', ['fileinclude', 'copy']);