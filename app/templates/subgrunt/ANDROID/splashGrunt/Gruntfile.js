module.exports = function(grunt) {

  var folderVar = {
    src:'input/',
    dist:''
  }

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    folders:folderVar,
    
    image_resize: {

      options:{
        force:true
      },

      splash_one:{
        options: {
          width: 800,
          height: 400,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable-land-hdpi/screen.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_2:{
        options: {
          width: 320,
          height: 200,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable-land-ldpi/screen.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_3:{
        options: {
          width: 480,
          height: 320,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable-land-mdpi/screen.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_4:{
        options: {
          width: 1280,
          height: 720,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable-land-xhdpi/screen.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_5:{
        options: {
          width: 480,
          height: 800,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable-port-hdpi/screen.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_6:{
        options: {
          width: 200,
          height: 320,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable-port-ldpi/screen.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_7:{
        options: {
          width: 320,
          height: 480,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable-port-mdpi/screen.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_8:{
        options: {
          width: 720,
          height: 1280,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable-port-xhdpi/screen.png':'<%= folders.src %>splash.png'
        }  
      }
      
    }
  });

  grunt.loadNpmTasks('grunt-image-resize');

  grunt.registerTask('default', function () {

    folderVar.dist = '../../../CORDOVA/platforms/android/res/';
    folderVar.src = '../../../app/config/'
    
    grunt.task.run([
      'image_resize'
    ]);
  });

};