
	var app = angular.module("app");
app.controller( 'searchCtrl', function( $scope ){
      $scope.initAddress = {};
      
    $scope.fallbackAddress = {
        lat: 32.794044,
        lng: 34.989571,
        zoom: 10 // optional, default value: 5
    }
   
});