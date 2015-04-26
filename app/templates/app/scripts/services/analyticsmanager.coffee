'use strict'

###*
 # @ngdoc service
 # @name yoApp.analyticsManager
 # @description
 # # analyticsManager
 # Factory in the yoApp.
###
angular.module('yoApp')
	.factory 'analyticsManager', (config, $rootScope, $location)->

		initialized = false

		{
			init: ->
				self = this
				if window.analytics
					console.log "ANALYTICS INIT"
					initialized = true
					analytics.startTrackerWithId config.ANALYTICS_ID

					$rootScope.$on "$routeChangeStart", (event, next, current) ->
						self.trackPage $location.path()
				#console.log 'analytics init'
			trackPage:(page)->
				if initialized
					analytics.trackView page
				#console.log "analytics trackview #{page}"
		}
