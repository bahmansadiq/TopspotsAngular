myApp=angular.module("myApp", []);



myApp.controller('MainController', ['$scope', '$http', function($scope, $http) { 

    var map;

       $http({
                method: 'GET',
                url: 'http://localhost:50629/api/TopSpots'
            }).then(function(spots) {          
     $scope.place= spots.data;
    // console.log(place);
     $scope.submitButton=function(){
     $scope.place.push({
    'name': $scope.addName,
     'description':$scope.addDescription,
     'location': $scope.addLocation
     });

		}
             });

/*
    $scope.map=  function initMap() {
              map = new google.maps.Map($scope,'map'), {
              center: {lat: 32.70922, lng: -117.17007},
              zoom: 12
               });
             }
*/
}]);
