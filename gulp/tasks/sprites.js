var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del'),
svg2png = require('gulp-svg2png');

//configures svgSprite object called 'config' which is responsibly for converting the icons into a sprite
var config = {
  mode:{
    css:{
      sprite: 'sprite.svg',
      render:{
        css: {
          template: './gulp/templates/sprite.css' //this file consists of template showing the positions of each icon
        }
      }
    }
  }
}

//deletes files in /app/temp/sprite and /app/assets/images/sprites to remove old copies of the svg file
gulp.task('beginClean', function() {
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

//create a sprite file in the app/temp/sprite folder
gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

//moves the sprite.svg file from  app/temp/sprite to app/assets/images
gulp.task('copySpriteGraphic', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

//moves the sprite file from app/temp/sprite to app/assets/styles/modules and rename it as _sprite.css
gulp.task('copySpriteCSS', ['createSprite'], function() {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del('./app/temp/sprite');
});

//when executed it runs the stated tasks in order
gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
