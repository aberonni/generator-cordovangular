// Generated on 2014-07-22 using generator-angular 0.9.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Configurable paths for the application
	var appConfig = {
		app: 'app',
		dist: 'CORDOVA/www'
	};

	var cordovaConfig = {};

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Project settings
		yeoman: appConfig,
		cordovaCreateConfig: cordovaConfig,

		// Watches files for changes and runs tasks based on the changed files
		watch: {
			bower: {
				files: ['bower.json'],
				tasks: ['wiredep']
			},
			coffee: {
				files: ['<%= yeoman.app %>/scripts/{,*/}*.{coffee,litcoffee,coffee.md}'],
				tasks: ['newer:coffee:dist']
			},
			compass: {
				files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
				tasks: ['compass:server', 'autoprefixer']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= yeoman.app %>/{,*/}*.html',
					'.tmp/styles/{,*/}*.css',
					'.tmp/scripts/{,*/}*.js',
					'<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		// The actual grunt server settings
		connect: {
			options: {
				port: 7000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: 'localhost',
				livereload: 35729
			},
			livereload: {
				options: {
					open: true,
					middleware: function (connect) {
						return [
							connect.static('.tmp'),
							connect().use(
								'/bower_components',
								connect.static('./bower_components')
							),
							connect.static(appConfig.app)
						];
					}
				}
			},
			dist: {
				options: {
					open: true,
					base: '<%= yeoman.dist %>'
				}
			}
		},

		// Empties folders to start fresh
		clean: {
			options: {
				force:true
			},
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/{,*/}*',
						'!<%= yeoman.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},

		// Add vendor prefixed styles
		autoprefixer: {
			options: {
				browsers: ['last 7 versions']
			},
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/styles/',
					src: '{,*/}*.css',
					dest: '.tmp/styles/'
				}]
			}
		},

		// Automatically inject Bower components into the app
		wiredep: {
			options: {
				cwd: '<%= yeoman.app %>'
			},
			app: {
				src: ['<%= yeoman.app %>/index.html'],
				ignorePath:  /\.\.\//
			},
			sass: {
				src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
				ignorePath: /(\.\.\/){1,2}bower_components\//
			}
		},

		// Compiles CoffeeScript to JavaScript
		coffee: {
			options: {
				sourceMap: true,
				sourceRoot: ''
			},
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/scripts',
					src: '{,*/}*.coffee',
					dest: '.tmp/scripts',
					ext: '.js'
				}]
			}
		},

		// Compiles Sass to CSS and generates necessary files if requested
		compass: {
			options: {
				sassDir: '<%= yeoman.app %>/styles',
				cssDir: '.tmp/styles',
				generatedImagesDir: '.tmp/images/generated',
				imagesDir: '<%= yeoman.app %>/images',
				javascriptsDir: '<%= yeoman.app %>/scripts',
				fontsDir: '<%= yeoman.app %>/styles/fonts',
				importPath: './bower_components',
				httpImagesPath: '/images',
				httpGeneratedImagesPath: '/images/generated',
				httpFontsPath: '/styles/fonts',
				relativeAssets: false,
				assetCacheBuster: false,
				raw: 'Sass::Script::Number.precision = 10\n'
			},
			dist: {
				options: {
					generatedImagesDir: '<%= yeoman.dist %>/images/generated'
				}
			},
			server: {
				options: {
					debugInfo: true
				}
			}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare: {
			html: '<%= yeoman.app %>/index.html',
			options: {
				dest: '<%= yeoman.dist %>',
				flow: {
					html: {
						steps: {
							js: ['concat', 'uglifyjs'],
							css: ['cssmin']
						},
						post: {}
					}
				}
			}
		},

		// Performs rewrites based on filerev and the useminPrepare configuration
		usemin: {
			html: ['<%= yeoman.dist %>/{,*/}*.html'],
			css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
			options: {
				assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
			}
		},

		htmlmin: {
			dist: {
				options: {
					collapseWhitespace: true,
					conservativeCollapse: true,
					collapseBooleanAttributes: true,
					removeCommentsFromCDATA: true,
					removeOptionalTags: true
				},
				files: [{
					expand: true,
					cwd: '<%= yeoman.dist %>',
					src: ['*.html', 'views/{,*/}*.html'],
					dest: '<%= yeoman.dist %>'
				}]
			}
		},

		// ngmin tries to make the code safe for minification automatically by
		// using the Angular long form for dependency injection. It doesn't work on
		// things like resolve or inject so those have to be done manually.
		ngmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/concat/scripts',
					src: '*.js',
					dest: '.tmp/concat/scripts'
				}]
			}
		},

		// Copies remaining files to places other tasks can use
		copy: {
			options: {
				force:true
			},
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'*.html',
						'views/**/*',
						'images/**/*',
						'sounds/*',
						'styles/fonts/*'
					]
				}, {
					expand: true,
					cwd: '.tmp/images',
					dest: '<%= yeoman.dist %>/images',
					src: ['generated/*']
				}]
			},
			//PROJECT SPECIFIC COPY
			project:{
				files:[{
					expand: true,
					cwd: '<%= yeoman.app %>/config',
					dest: '<%= yeoman.dist %>/../',
					src: [
						'config.xml'
					],
					rename:function(dest,src){
						return dest+'/config.xml'
					}
				}]
			},
			ios: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.dist %>/../platforms/ios/www',
					dest: '<%= yeoman.dist %>/scripts',
					src: [
						'plugins/**',
						'cordova.js',
						'cordova_plugins.js'
					]
				}]
			},
			android: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.dist %>/../platforms/android/assets/www',
					dest: '<%= yeoman.dist %>/scripts',
					src: [
						'plugins/**',
						'cordova.js',
						'cordova_plugins.js'
					]
				}, {
					expand: true,
					cwd: '<%= yeoman.app %>/config/keystore',
					dest: '<%= yeoman.dist %>/../platforms/android',
					src: [
						'*'
					]
				}]
			},
			styles: {
				expand: true,
				cwd: '<%= yeoman.app %>/styles',
				dest: '.tmp/styles/',
				src: '{,*/}*.css'
			},
			createConfig:{
				files:[{
					expand: true,
					cwd: '<%= yeoman.dist %>/../',
					dest: '<%= yeoman.app %>/config',
					src: [
						'config.xml'
					],
					rename:function(dest,src){
						return dest+'/config.xml'
					}
				}]
			},
			browser:{}
		},

		// Run some tasks in parallel to speed up the build process
		concurrent: {
			server: [
				'coffee:dist',
				'compass:server'
			],
			dist: [
				'coffee:dist',
				'compass:dist'
			]
		},

		subgrunt:{
			android:{
				'subgrunt/ANDROID/iconGrunt':'default',
				'subgrunt/ANDROID/splashGrunt':'default'
			},
			ios:{
				'subgrunt/APPLE/iconGrunt':'default:<%= yeoman.projectName %>',
				'subgrunt/APPLE/splashGrunt':'default:<%= yeoman.projectName %>'
			}
		},

	    shell: {
	        cordova: {
	        	command: function (target) {
                    return 'cordova build ' + target
                },
	            options: {
	                execOptions: {
	                    cwd: '<%= yeoman.dist %>/../',
	                    maxBuffer: Infinity
	                }
	            }
	        },
	        cordovaCreate: {
	        	command: function (target) {

	        		var shellCommand = 'cordova create CORDOVA ' + grunt.config('createId') + ' "' + grunt.config('createName') + '" && cd CORDOVA'

	        		if (grunt.config('cordovaPlatforms').length > 0){
	        			for (var i = grunt.config('cordovaPlatforms').length - 1; i >= 0; i--) {
	        				shellCommand += ' && cordova platform add ' + grunt.config('cordovaPlatforms')[i];
	        			};
	        		}

	        		shellCommand += ' && cordova plugin add org.apache.cordova.console && cordova plugin add org.apache.cordova.file && cordova plugin add org.apache.cordova.inappbrowser && cordova plugin add org.apache.cordova.dialogs && cordova plugin add https://github.com/danwilson/google-analytics-plugin.git'

                    return shellCommand
                },
	            options: {
	                execOptions: {
	                    maxBuffer: Infinity
	                }
	            }
	        }
	    },

	    prompt: {
			buildTarget: {
				options: {
					questions: [{
						config: 'buildTarget',
						type: 'list',
						message: 'For which platform are you building?',
						default: 'android',
						choices: ['android','ios','browser']
					}]
				}
			},
			buildIcons: {
				options: {
					questions: [{
						config: 'buildIcons',
						type: 'confirm',
						message: 'Would you like to build icons and splashscreen?',
						default: false
					}]
				}
			},
			buildCordova: {
				options: {
					questions: [{
						config: 'buildCordova',
						type: 'confirm',
						message: 'Would you like to build/run for cordova?',
						default: true
					}]
				}
			}
		}
	});

	function getProjectDetails(){
		var projectFile = grunt.file.readJSON("project.json");

		appConfig.projectName = projectFile.name;

		grunt.config('createId', projectFile.id);
		grunt.config('createName', projectFile.name);
		grunt.config('cordovaPlatforms',projectFile.platforms);
	}


	grunt.registerTask('serve', 'Compile then start a connect web server', function () {

		appConfig.dist = appConfig.app;
		getProjectDetails();

		grunt.task.run([
			'copy:project',
			'clean:server',
			'copy:ios',
			'wiredep',
			'concurrent:server',
			'autoprefixer',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('build', 'Compile for deploy', function (target) {

		var tasks = ['prompt:buildIcons','prompt:buildCordova','real_build']

		getProjectDetails();

		if (!target)
			tasks.unshift('prompt:buildTarget')
		else
			grunt.config('buildTarget',target)

		grunt.task.run(tasks)

	});

	grunt.registerTask('real_build', 'Compile for deploy', function () {
		var target = grunt.config('buildTarget')

		var tasks = [
			'clean:dist',
			'wiredep',
			'useminPrepare',
			'concurrent:dist',
			'autoprefixer',
			'concat',
			'ngmin',
			'copy:dist',
			'copy:'+target,
			'copy:project',
			'cssmin',
			'uglify',
			'usemin',
			'htmlmin',
		]

		if (grunt.config('buildIcons') && target != 'browser')
		{
			tasks.push('subgrunt:'+target);
		}

		if (grunt.config('buildCordova'))
		{
			tasks.push('shell:cordova:'+target)
		}


		grunt.task.run(tasks);
	});


	grunt.registerTask('cordova', 'Build for cordova', function (target, project) {

		var tasks = ['prompt:buildIcons','real_cordova']

		getProjectDetails();

		if (!target)
			tasks.unshift('prompt:buildTarget')
		else
			grunt.config('buildTarget',target)

		grunt.task.run(tasks)

	});

	grunt.registerTask('real_cordova', 'Called from cordova task', function () {

		var tasks = [
			'shell:cordova:'+grunt.config('buildTarget')
		]

		grunt.task.run(tasks);
	});

	grunt.registerTask('create', 'Create new cordova project', function () {

		getProjectDetails();

		var tasks = [
			'shell:cordovaCreate',
			'copy:createConfig'
		]

		grunt.task.run(tasks);
	});
};
