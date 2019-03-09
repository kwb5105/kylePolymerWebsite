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
    $scope.starWarsAPInames = [];
    // Simple GET request example:
    $http({
        method: 'GET',
        //url: 'https://jsonplaceholder.typicode.com/todos/1'
        url: 'https://swapi.co/api/people/'
    }).then(function successCallback(response) {
            console.log(response.data.results);
            for (var i = 0; i < response.data.results.length; i++) {
                console.log(response.data.results[i].name);
                $scope.starWarsAPInames.push(response.data.results[i].name);
            }
            //console.log("This works!")
            $scope.databaseResponse = response.data.results;
            // when the response is available
        },
        function errorCallback(response) {
            console.log("this does not work.");
            $scope.databaseResponse = response;
        });

});