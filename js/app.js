/*var app = angular.module("myApp", []);
app.directive("w3TestDirective", function () {

    return {
        restrict: "A",
        template: "<h1>Directing Testing from Javascript file </h1>"

    };

});
*/
var app = angular.module('myApp', ['ui.grid']);
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
    $scope.data = [{
            name: 'Kyle',
            title: 'CEO'
        },
        {
            name: 'Trevor',
            title: 'Lead Fire dog'
        },
        {
            name: 'Justin',
            title: 'Executive Project Manager'
        },
        {
            name: 'Greg',
            title: 'Senior Developer'
        },
        {
            name: 'Matt',
            title: 'Finance - Non IT'
        }
    ];

    $scope.myDate = new Date();
    $scope.hrs = $scope.myDate.getHours();

    $scope.greet;

    if ($scope.hrs < 12)
        $scope.greet = 'Good Morning';
    else if ($scope.hrs >= 12 && $scope.hrs <= 17)
        $scope.greet = 'Good Afternoon';
    else if ($scope.hrs >= 17 && $scope.hrs <= 24)
        $scope.greet = 'Good Evening';
});