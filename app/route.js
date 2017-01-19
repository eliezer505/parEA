(function() {
	angular.module("clubear").config(route);

	function route($routeProvider) {
		$routeProvider.when('/login/', {
			templateUrl : 'app/view/login.html',
			//template:"<h1>this is about page</h1>"

		}).when('/about/', {
			templateUrl : 'app/view/about.html',

			//template:"<h1>this is about page</h1>"


		}).when('/login/', {
			templateUrl : 'app/view/login.html',
			controller: 'loginCtrl'

			//template:"<h1>this is about page</h1>"
			
			}).when('/night/', {
			templateUrl : 'app/view/night.html',
			controller: 'nightCtrl'

			//template:"<h1>this is about page</h1>"

		}).when('/rest/', {
			templateUrl : 'app/view/rest.html',
			controller: 'restCtrl'

			//template:"<h1>this is about page</h1>"
			
			}).when('/sites/', {
			templateUrl : 'app/view/sites.html',
			controller: 'sitesCtrl'

			//template:"<h1>this is about page</h1>"
			
			}).when('/museums/', {
			templateUrl : 'app/view/museums.html',
			controller: 'museumsCtrl'

			//template:"<h1>this is about page</h1>"

		}).when('/search/', {
			templateUrl : 'app/view/search.html',
			controller: 'searchCtrl'
			

			//template:"<h1>this is about page</h1>"

		}).when('/map/', {
			templateUrl : 'app/view/map.html',
            controller: 'mapCtrl'
			//template:"<h1>this is about page</h1>"
			
			
		}).otherwise({
			redirectTo : '/login/'
		});

	}

})();
