(function(){
	var app= angular.module("app")
	app.controller("weatherCtrl", weatherCtrl)
	
	
	function weatherCtrl($scope, $http){
		
		var API = "http://api.openweathermap.org/data/2.5/forecast/city?id=294801&APPID=7b8ec61080327a537bf54b9ec823b260&units=metric"

		
		$scope.title = 'weather Ctrl';
		
		
		
		var init = function(){
			
			var promise = $http.get(API);
			promise.then(success);

			function success(response) {

				console.log(response.data);

				$scope.data = response.data
			};
			
		
		};
		init();
		
	}
	
	

		
		
			 
	
		

})();