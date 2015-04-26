'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
	initializing: function () {
		this.pkg = require('../package.json');
	},

	prompting: function () {
		var done = this.async();

		// Have Yeoman greet the user.
		this.log(yosay(
			'Welcome to the wonderful ' + chalk.red('cordovangular') + ' generator!'
		));

		var prompts = [{
			name: 'appName',
			message: 'What is your app\'s name?'
		},{
			name: 'appID',
			message: 'What is your app\'s identifier?\n(Something like com.yourname.appname)'
		},{
			name: 'appPlatforms',
			message: 'What cordova platforms do you desire to build to?',
			type:'checkbox',
			choices:['android','ios','browser']
		}];

		this.prompt(prompts, function (props) {
			this.props = props;
			// To access props later use this.props.someOption;
			this.log(props.appPlatforms)
			done();
		}.bind(this));
	},

	writing: function () {
		this.fs.copy(
			this.templatePath('**/**'),
			this.destinationPath('')
		);

		this.fs.copy(
			this.templatePath('.*'),
			this.destinationPath('')
		);

		this.fs.copy(
			this.templatePath('app/.*'),
			this.destinationPath('app/')
		);

		this.fs.delete(
			this.destinationPath('_project.json')
		)
	},

	creatingJSON: function(){

		var platforms

		if (this.props.appPlatforms.length == 0){
			platforms = '""'
		}
		else{
			platforms = '['

			for (var i = this.props.appPlatforms.length - 1; i >= 0; i--) {
				platforms += '"' + this.props.appPlatforms[i]+ '"'

				if (i!=0)
					platforms += ','
			}

			platforms += ']'
		}


		this.props.appPlatforms

		var context = { 
	        app_name: this.props.appName,
	        app_id: this.props.appID,
	        app_platforms: platforms
	    };
 
 	    this.template("_project.json", "project.json", context);
	},

	install: function () {

		this.installDependencies({
			callback:function(){

				this.log('\nFinished running ' + chalk.yellow('npm install && bower install') + ' for you!\n\nNow creating the '+ chalk.yellow('cordova project') + '.');

				var self = this

				setTimeout(function() {
					self.spawnCommand('grunt',['create']);
				}, 1000);

			}.bind(this)
		});
	}

});
