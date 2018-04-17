import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import concat from 'gulp-concat'
import babel from 'gulp-babel'
import uglify from 'gulp-uglify'
import del from 'del'
import rename from 'gulp-rename'
import pngquant from 'imagemin-pngquant'
import advpng from 'imagemin-advpng'
import mozjpeg from 'imagemin-mozjpeg'
import pngtojpeg from 'png-to-jpeg'

const { lstatSync, readdirSync, mkdirSync, existsSync } = require('fs')
const { join, resolve } = require('path')
const isDir = p => lstatSync(p).isDirectory()

const getDirs = path => {
  path = resolve(path)
  return readdirSync(path).map(x => join(path, x)).filter(isDir)
}

const getDirsDeep = (path) => {
  let results = []
  const deep = (d) => {
    let dirs = getDirs(d)
    dirs.length > 0 ? dirs.forEach(dir => deep(dir)) : results.push(d)
  }
  deep(path)
  return results.length > 0 ? results : null
}

const paths = {
  styles: {
    src: 'src/styles/**/*.less',
    dest: 'build/styles/'
  },
  images: {
    src: 'css/img',
    dest: 'build/css/img/projects/nununu/'
  },
  scripts: {
    src: 'js/*.js',
    dest: 'build/js/'
  },
  temp: "temp",
  target: "css/img/reads/say-goodbye-to-ftp"
}

export const purgeTemp = () => del([ 'temp' ])
export const purgeBuild = () => del([ 'build' ])

export const scripts = () => {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel({
      presets: [
        ["env", {
          "targets": {
            "browsers": ["ie 8"]
          },
          "debug": false
        }]
      ]
    }))
    .pipe(uglify())
    .pipe(concat('index.js'))
    .pipe(gulp.dest(paths.scripts.dest))
}

export const lossless = () => {
  return gulp.src(paths.target)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.temp))
}

export const lossy_png = () => {
  let dirs = getDirsDeep(paths.images.src)
  dirs.push(resolve(paths.images.src))
  let ret
  if (dirs) {
    dirs.forEach(dir => {
      let destination = dir.replace(`${process.cwd()}`,`${process.cwd()}/build`)
      ret = gulp.src(`${dir}/*png`)
      .pipe(imagemin([
        pngquant(),
        advpng()
      ]))
      .pipe(gulp.dest(destination))
    })
  }
  return ret
}

export const lossy_jpeg = () => {
  let dirs = getDirsDeep(paths.images.src)
  dirs.push(resolve(paths.images.src))
  let ret
  if (dirs) {
    dirs.forEach(dir => {
      let destination = dir.replace(`${process.cwd()}`,`${process.cwd()}/build`)
      ret = gulp.src(`${dir}/*jpg`)
      .pipe(imagemin([
        mozjpeg({quality: 65})
      ]))
      .pipe(gulp.dest(destination))
    })
  }
  return ret
}

export const pngToJpeg = () => {
  return gulp.src(paths.target)
    .pipe(imagemin([
      pngtojpeg({quality: 90})
    ]))
    .pipe(rename(f => {
      f.extname = ".jpg"
    }))
    .pipe(gulp.dest(paths.temp))
}

export const optimizeImgs = gulp.parallel(lossy_png, lossy_jpeg)
export const build = gulp.parallel(scripts, optimizeImgs)
export default build

/*
 * You can also declare named functions and export them as tasks
 */
// export function styles() {
//   return gulp.src(paths.styles.src)
//     .pipe(less())
//     .pipe(purgeCSS())
//     // pass in options to the stream
//     .pipe(rename({
//       basename: 'main',
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest(paths.styles.dest))
// }

 /*
  * You could even use `export as` to rename exported tasks
  */
// function watchFiles() {
//   gulp.watch(paths.scripts.src, scripts)
//   gulp.watch(paths.styles.src, styles)
// }
// export { watchFiles as watch
