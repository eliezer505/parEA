(function() {

	var club = angular.module("clubear", ['ngRoute', 'socialLogin']);
	club.config(function(socialProvider) {
		socialProvider.setGoogleKey("970903539685-anhko8kiuva2u6cvvesuh9o7ej011i2e.apps.googleusercontent.com");
		//socialProvider.setLinkedInKey("YOUR LINKEDIN CLIENT ID");
		socialProvider.setFbKey({
			appId : "569349916606060",
			apiVersion : "v2.7"
		});
	});

})();

