process.env.DEBUG = 'app*,db,user,dn.*'

const gulp = require('gulp')
const exec_process = require('child_process').exec
const debug_less = require('debug')('less')

gulp.task('monitor', function() {
  const nodemon = require('gulp-nodemon')
  const watch = require('gulp-watch')

  watch('./static/less/**/*.less', {
    name: 'less-css',
    events: ['add', 'change']
  }, compile_less)

  nodemon({
    script: './server.js',
    watch: [
      './server.js',
      './lib/'
    ],
    ext: 'js',
    env: {
      'NODE_ENV': 'development',
      'DEBUG': process.env.DEBUG
    }
  })

});

gulp.task('compile-less', compile_less)

function compile_less() {
  return exec_process('bash ./bin/compile-less.sh', (e, out, err) =>
    debug_less( (e || err ) || out) )
}

