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

      splash_one:{
        options: {
          width: 640,
          height: 1136,
          crop:true
        },
        files: {
          '<%= folders.dist %>Default-568h@2x~iphone.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_2:{
        options: {
          width: 750,
          height: 1334,
          crop:true
        },
        files: {
          '<%= folders.dist %>Default-667h.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_3:{
        options: {
          width: 1242,
          height: 2208,
          crop:true
        },
        files: {
          '<%= folders.dist %>Default-736h.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_4:{
        options: {
          width: 2208,
          height: 1242,
          crop:true
        },
        files: {
          '<%= folders.dist %>Default-Landscape-736h.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_5:{
        options: {
          width: 2048,
          height: 1536,
          crop:true
        },
        files: {
          '<%= folders.dist %>Default-Landscape@2x~ipad.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_6:{
        options: {
          width: 1024,
          height: 768,
          crop:true
        },
        files: {
          '<%= folders.dist %>Default-Landscape~ipad.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_7:{
        options: {
          width: 1536,
          height: 2048,
          crop:true
        },
        files: {
          '<%= folders.dist %>Default-Portrait@2x~ipad.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_8:{
        options: {
          width: 768,
          height: 1024,
          crop:true
        },
        files: {
          '<%= folders.dist %>Default-Portrait~ipad.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_9:{
        options: {
          width: 640,
          height: 960,
          crop:true
        },
        files: {
          '<%= folders.dist %>Default@2x~iphone.png':'<%= folders.src %>splash.png'
        }  
      },

      splash_10:{
        options: {
          width: 320,
          height: 480,
          crop:true
        },
        files: {
          '<%= folders.dist %>Default~iphone.png':'<%= folders.src %>splash.png'
        }  
      }
      
    }
  });

  grunt.loadNpmTasks('grunt-image-resize');

  grunt.registerTask('default', function (pName) {

    appConfig.src = '../../../app/config/'
    appConfig.dist = '../../../CORDOVA/platforms/ios/'+pName+'/Resources/splash/'
    
    grunt.task.run([
      'image_resize'
    ]);
  });

};