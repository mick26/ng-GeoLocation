
'use strict';

/*================================================
Controllers Module
================================================ */
angular.module('myApp.controllers', [])

/*================================================
GeoCtrl - Controller
================================================ */
.controller('GeoCtrl', function($scope, geolocation) {

   /*
	* then calls one of the success or error callbacks asynchronously as 
	* soon as the result is available
    */
    geolocation.getLocation()
    	//promise resolved ok - successCallback
    	.then(function(data) {
      		$scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
    	},
    	//error - promise not resolved - errorCallback
    	function(error) {
    		console.log("Error: "+error);
    		$scope.GeoError=error;
    	});
});
