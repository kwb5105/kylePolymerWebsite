/*var app = angular.module("myApp", []);
app.directive("w3TestDirective", function () {

    return {
        restrict: "A",
        template: "<h1>Directing Testing from Javascript file </h1>"

    };

});
*/
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    // Simple GET request example:
    $http({
        method: 'GET',
        url: 'https://swapi.co/api/people/'
    }).then(function successCallback(response) {
            //console.log(response.data.results.length);
            //for (var i = 0; i < response.data.results.length; i++) {
            //}
            // when the response is available
            $scope.databaseResponse = response.data.results;
        },
        function errorCallback(response) {
            //console.log("this does not work.");
            $scope.databaseResponse = response;
        });

});