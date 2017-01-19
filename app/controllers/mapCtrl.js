
	var app = angular.module("app");
app.controller( 'mapCtrl', function( $scope ){
       $scope.initAddress = {
        place_id : "ChIJRegNdUy6HRURmlKBKpgjXcM",
        geometry : {
            location : {
                A : 45.464679,
                F : 9.190770100000009
            }
        },
        zoom : 7 // optional, default value: 15
    };
});