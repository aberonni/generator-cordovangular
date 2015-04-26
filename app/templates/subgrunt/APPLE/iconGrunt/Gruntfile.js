module.exports = function(grunt) {

  var appConfig = {
    dist: '../../cdvios',
    input:''
  };

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    folders: appConfig,
    
    image_resize: {

      options:{
        force:true
      },

      // APP ICONS


      // iPhone Non-Retina (iOS 6.1 and Prior)
      icon:{
        options: {
          width: 57,
          height: 57,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon.png': '<%= folders.src %>icon.png'
        }  
      },
      // iPhone Retina (iOS 6.1 and Prior)
      icon_retina:{
        options: {
          width: 114,
          height: 114,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon@2x.png': '<%= folders.src %>icon.png'
        }  
      },
      // iPhone Retina
      icon_60_retina:{
        options: {
          width: 120,
          height: 120,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-60@2x.png': '<%= folders.src %>icon.png'
        }  
      },

      icon_60_3:{
        options: {
          width: 180,
          height: 180,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-60@3x.png': '<%= folders.src %>icon.png'
        }  
      },
      // iPad Non-Retina (iOS 6.1 and Prior)
      icon_72:{
        options: {
          width: 72,
          height: 72,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-72.png': '<%= folders.src %>icon.png'
        }  
      },
      // iPad Retina (iOS 6.1 and Prior)
      icon_72_retina:{
        options: {
          width: 144,
          height: 144,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-72@2x.png': '<%= folders.src %>icon.png'
        }  
      },
      // iPad Non-Retina
      icon_76:{
        options: {
          width: 76,
          height: 76,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-76.png': '<%= folders.src %>icon.png'
        }  
      },
      // iPad Retina
      icon_76_retina:{
        options: {
          width: 152,
          height: 152,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-76@2x.png': '<%= folders.src %>icon.png'
        }  
      },

      // SPOTLIGHT ICONS
      
      // iPhone Non-Retina (iOS 6.1 and Prior)
      icon_small:{
        options: {
          width: 29,
          height: 29,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-small.png': '<%= folders.src %>icon.png'
        }  
      },
      // iPhone Retina (iOS 6.1 and Prior)
      icon_small_retina:{
        options: {
          width: 58,
          height: 58,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-small@2x.png': '<%= folders.src %>icon.png'
        }  
      },
      // iPhone Retina
      icon_40_retina:{
        options: {
          width: 80,
          height: 80,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-40@2x.png': '<%= folders.src %>icon.png'
        }  
      },
      // iPad Non-Retina (iOS 6.1 and Prior)
      icon_50:{
        options: {
          width: 50,
          height: 50,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-50.png': '<%= folders.src %>icon.png'
        }  
      },
      // iPad Retina (iOS 6.1 and Prior)
      icon_50_retina:{
        options: {
          width: 100,
          height: 100,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-50@2x.png': '<%= folders.src %>icon.png'
        }  
      },
      // iPad Non-Retina
      icon_40:{
        options: {
          width: 40,
          height: 40,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-40.png': '<%= folders.src %>icon.png'
        }  
      },
      // iPad Retina
      icon_40_retina:{
        options: {
          width: 80,
          height: 80,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-40@2x.png': '<%= folders.src %>icon.png'
        }  
      },


      icon_60:{
        options: {
          width: 60,
          height: 60,
          crop:true
        },
        files: {
          '<%= folders.dist %>icon-60.png': '<%= folders.src %>icon.png'
        }  
      }
    }
  });

  grunt.loadNpmTasks('grunt-image-resize');

  grunt.registerTask('default', function (pName) {

    appConfig.src = '../../../app/config/apple-'
    appConfig.dist = '../../../CORDOVA/platforms/ios/'+pName+'/Resources/icons/'
    
    grunt.task.run([
      'image_resize'
    ]);
  });

};