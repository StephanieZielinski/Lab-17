var app = angular.module("myApp", []);

app.controller('reddit', function($scope, $http) {

    $scope.redditData = {};


    $http({
        url: 'https://www.reddit.com/r/aww/.json',
        method: 'GET'
    }).then(function successfulCallback(response) {
        console.log(response);

        $scope.redditData = response.data.data.children;

    });

});
