'use strict'

###*
 # @ngdoc function
 # @name yoApp.controller:HomeCtrl
 # @description
 # # HomeCtrl
 # Controller of the yoApp
###
angular.module('yoApp')
	.controller 'HomeCtrl', ($scope, config) ->

		$scope.homeBtns = config.MENU