'use strict'

###*
 # @ngdoc service
 # @name yoApp.scoreManager
 # @description
 # # scoreManager
 # Factory in the yoApp.
###
angular.module('yoApp')
  .factory 'detector', ()->
	# Service logic
	# ...


	# Public API here
	{
		Android: ()->
			/Android/i.test navigator.userAgent
		BlackBerry: ()->
			/BlackBerry/i.test navigator.userAgent
		iOS: ()->
			/iPhone|iPad|iPod/i.test navigator.userAgent
		Windows: ()->
			/IEMobile/i.test navigator.userAgent
		mobile: ()->
			this.Android() || this.BlackBerry() || this.iOS() || this.Windows()
	}
