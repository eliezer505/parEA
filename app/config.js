(function() {

	var club = angular.module("clubear", ['ngRoute', 'socialLogin']);
	club.config(function(socialProvider) {
		//socialProvider.setGoogleKey("YOUR GOOGLE CLIENT ID");
		//socialProvider.setLinkedInKey("YOUR LINKEDIN CLIENT ID");
		socialProvider.setFbKey({
			appId : "569349916606060",
			apiVersion : "v2.7"
		});
	});

})();

