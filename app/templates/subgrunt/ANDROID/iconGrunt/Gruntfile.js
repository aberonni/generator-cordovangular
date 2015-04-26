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

      // APP ICONS

      icon:{
        options: {
          width: 96,
          height: 96,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable/icon.png': '<%= folders.src %>icon.png'
        }  
      },

      icon_hdpi:{
        options: {
          width: 72,
          height: 72,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable-hdpi/icon.png': '<%= folders.src %>icon.png'
        }  
      },

      icon_ldpi:{
        options: {
          width: 36,
          height: 36,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable-ldpi/icon.png': '<%= folders.src %>icon.png'
        }  
      },

      icon_mdpi:{
        options: {
          width: 48,
          height: 48,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable-mdpi/icon.png': '<%= folders.src %>icon.png'
        }  
      },

      icon_xhdpi:{
        options: {
          width: 96,
          height: 96,
          crop:true
        },
        files: {
          '<%= folders.dist %>drawable-xhdpi/icon.png': '<%= folders.src %>icon.png'
        }  
      }
    }
  });

  grunt.loadNpmTasks('grunt-image-resize');

  grunt.registerTask('default', function () {

    folderVar.src = '../../../app/config/android-'
    folderVar.dist = '../../../CORDOVA/platforms/android/res/';

    grunt.task.run([
      'image_resize'
    ]);
  });

};