module.exports = function (grunt) {

  // 项目配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      css: {
        files: [
          '**/*.sass',
          '**/*.scss'
        ],
        tasks: ['compass']
      }
    },
    compass: {
      dist: {
        options: {
          basePath: 'src',
          sassDir: 'sass',
          specify: ['src/sass/sprite.scss'],
          imagesDir: "images",
          relativeAssets: true,
          cssDir: 'css',
          outputStyle: 'expanded'
        }
      }
    }
  });

  // 加载Grunt插件
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 注册grunt默认任务
  grunt.registerTask('default', ['compass']);
};