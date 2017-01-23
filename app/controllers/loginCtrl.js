(function() {
	var app = angular.module('clubear');
	app.controller('loginCtrl', function($rootScope) {

	$rootScope.$on('event:social-sign-in-success', function(event, userDetails){
		
		console.log(userDetails);
	});
	});

})();
