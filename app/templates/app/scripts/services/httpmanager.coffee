'use strict'

###*
 # @ngdoc service
 # @name yoApp.scoreManager
 # @description
 # # scoreManager
 # Factory in the yoApp.
###
angular.module('yoApp')
  .factory 'httpManager', ($location, $http, $q, router)->
	googlePromiser = null

	urlOnCall = ""


	# Public API here
	{
		injectGoogleScript:(promiser)->
			window.googleInitialize = ()->
				console.log 'google initialized'
				googlePromiser.resolve()
				false

			googlePromiser = promiser

			script = document.createElement 'script'
			script.type = 'text/javascript'
			script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&callback=googleInitialize'
			document.body.appendChild script
			false

		call:(apiURL,callback,eventPage=false,methd='GET')->

			currentData = null
			self = this

			urlOnCall = router.currentURL()

			dataLoaded = $q.defer()
			promiseList = [dataLoaded.promise]			

			if eventPage && !google?
				googleAPILoaded = $q.defer()
				promiseList.push googleAPILoaded.promise
				this.injectGoogleScript googleAPILoaded

			$q.all(promiseList).then ()->
				if urlOnCall == router.currentURL()
					if currentData.status == 'error'
						self.errorOnCall()
					else
						callback currentData
				false


			$http 
				method:methd
				url:apiURL
			.success (data, status, headers, config)->
				currentData = data
				dataLoaded.resolve()
				false
			.error (data, status, headers, config)->
				if urlOnCall == router.currentURL()
					self.errorOnCall()
				false
			false

		errorOnCall:()->
			router.navigate '/'
			alert 'Ops!','Si è verificato un errore con le API.\nRiprova più tardi.','error'

			false
	}