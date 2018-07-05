import gulp from "gulp";
import imagemin from "gulp-imagemin";
import rename from "gulp-rename";
import pngquant from "imagemin-pngquant";
import advpng from "imagemin-advpng";
import mozjpeg from "imagemin-mozjpeg";
import pngtojpeg from "png-to-jpeg";

const { lstatSync, readdirSync } = require("fs");
const { join, resolve } = require("path");

const isDir = p => lstatSync(p).isDirectory();

const getDirs = path => {
  const resolved = resolve(path);
  return readdirSync(resolved)
    .map(x => join(resolved, x))
    .filter(isDir);
};

const getDirsDeep = path => {
  const results = [];
  const deep = d => {
    const dirs = getDirs(d);
    // eslint-disable-next-line no-unused-expressions
    dirs.length > 0 ? dirs.forEach(dir => deep(dir)) : results.push(d);
  };

  deep(path);
  return results.length > 0 ? results : null;
};

const paths = {
  styles: {
    src: "src/styles/**/*.less",
    dest: "build/styles/"
  },
  images: {
    src: "css/img",
    dest: "build/css/img/projects/nununu/"
  },
  scripts: {
    src: "js/*.js",
    dest: "build/js/"
  },
  temp: "temp",
  target: "css/img/projects/tazel"
};

export const scripts = () => {};

export const lossless = () =>
  gulp
    .src(`${paths.target}/*`)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.temp));

export const lossyPng = () => {
  const dirs = getDirsDeep(paths.images.src);
  dirs.push(resolve(paths.images.src));
  let ret;
  if (dirs) {
    dirs.forEach(dir => {
      const destination = dir.replace(
        `${process.cwd()}`,
        `${process.cwd()}/build`
      );
      ret = gulp
        .src(`${dir}/*png`)
        .pipe(imagemin([pngquant(), advpng()]))
        .pipe(gulp.dest(destination));
    });
  }
  return ret;
};

export const lossyJpeg = () => {
  const dirs = getDirsDeep(paths.images.src);
  dirs.push(resolve(paths.images.src));
  let ret;
  if (dirs) {
    dirs.forEach(dir => {
      const destination = dir.replace(
        `${process.cwd()}`,
        `${process.cwd()}/build`
      );
      ret = gulp
        .src(`${dir}/*jpg`)
        .pipe(imagemin([mozjpeg({ quality: 65 })]))
        .pipe(gulp.dest(destination));
    });
  }
  return ret;
};

export const copyOthers = () => {
  const dirs = getDirsDeep(paths.images.src);
  dirs.push(resolve(paths.images.src));
  let ret;
  if (dirs) {
    dirs.forEach(dir => {
      const destination = dir.replace(
        `${process.cwd()}`,
        `${process.cwd()}/build`
      );
      ret = gulp
        .src(`${dir}/*`, `!${dir}/*jpg`, `!${dir}/*png`)
        .pipe(gulp.dest(destination));
    });
  }
  return ret;
};

export const pngToJpeg = () =>
  gulp
    .src(`${paths.target}/*png`)
    .pipe(imagemin([pngtojpeg({ quality: 90 })]))
    .pipe(
      rename(f => {
        // eslint-disable-next-line no-param-reassign
        f.extname = ".jpg";
      })
    )
    .pipe(gulp.dest(paths.temp));

export const optimizeImgs = gulp.parallel(lossyPng, lossyJpeg, copyOthers);
export const build = gulp.parallel(scripts, optimizeImgs);
export default build;
