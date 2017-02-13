module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
     sass: {
       style: {
         files: {
           "css/style.css" : "sass/style.scss"
         }
       }
     }
  });
};
