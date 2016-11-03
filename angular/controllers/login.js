(function() {
	var app= angular.module("app");
	
	app.controller("login", login);
	
	
	
	function login($scope,$http) {
		
		
		var userLang = navigator.language || navigator.userLanguage; 
		
		
		
		$scope.lang = null;
		$http.get('dictionary/dictionary.json')
		.success(function (data){
			console.log(userLang);
			switch (userLang){
				case "he" : 
						$scope.lang=data.he; 
						break;
				case "en" : 
						$scope.lang=data.en; 
						break;
			}
		
			
			
			
		})
		.error(function(data,status,error,config){
			alert(error);
		})
		;
		
		
		var API_KEY="?apiKey=5178650f2fb747a1a4c48cf9b86bd154";
		var URL="http://addb.absolutdrinks.com/drinks/";
        var QUERY="";
		$scope.searchDrinks="";
		$scope.title="search ctrl";
		$scope.getDrinks=function(){
		var promise = $http.jsonp( "http://addb.absolutdrinks.com/quickSearch/drinks/"+ $scope.searchDrinks +"/?apiKey=5178650f2fb747a1a4c48cf9b86bd154&callback=JSON_CALLBACK");
            promise.success(function(data){
                console.log("this is my data",data);
                 console.log("this is my data",data.result.videos);
                
            });
		;
		promise.then(successCallback,failureCallback);
		
		function successCallback(result){
			console.log(result.data.result);
			console.log(result.data.result.videos);
			$scope.drinks=result.data.result;
			result.data.result.map(function(item){
				$scope.names=item.name;
			});
		
		}
		function failureCallback(result){
			console.log(result);
		}	
		};
	}
})();




