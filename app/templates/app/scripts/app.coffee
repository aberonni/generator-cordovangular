'use strict'

###*
 # @ngdoc overview
 # @name yoApp
 # @description
 # # yoApp
 #
 # Main module of the application.
###
angular
	.module('yoApp', [
		'ngRoute',
		'ngTouch',
		'ngAnimate'
	])
	.config ($routeProvider) ->
		$routeProvider
			.when '/',
				templateUrl: 'views/home.html'
				controller: 'HomeCtrl'
			.when '/test',
				templateUrl: 'views/test.html'
				controller: 'TestCtrl'
			.otherwise
				redirectTo: '/'
	.run ($rootScope, imagePreloader, config, $q, $timeout, analyticsManager, $location, $window) ->

		initialized = ()->
			$rootScope.PRELOADED = true
			false

		init = ()->   
			timePast = $q.defer()

			$q.all([timePast.promise]).then initialized

			$timeout ()->
				timePast.resolve()
			, 1500

			analyticsManager.init()
			false

		start = ->
			$rootScope.PRELOADED = false

			console.log 'starting app'

			config.runningOnPhone = document.URL.indexOf( 'http://' ) == -1 && document.URL.indexOf( 'https://' ) == -1

			if !config.runningOnPhone
				$("html,body").addClass 'desktop'
				init()
			else
				document.addEventListener "deviceready", ()->
					init()

					document.addEventListener "backbutton", ()->
						if $location.path() == '/'
							navigator.app.exitApp()
						else
							$window.history.back()
						false
				, false 

			false

		start()

		false