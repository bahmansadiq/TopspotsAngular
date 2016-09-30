var app=angular.module("myApp", []);



app.controller('MainController', ['$scope', '$http', function($scope, $http) { 




       $http.get('topspots.json').then(function(spots) {

           
                      $scope.place= spots.data.topspots;
                          			
             });

}]);
