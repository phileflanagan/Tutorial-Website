// Module
var howToApp = angular.module('howToApp', ['ngRoute', 'ngResource']);

// Routes
howToApp.config(function($routeProvider) {
    console.log($routeProvider);
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'howToCtrl',
        })
    
        .when('/tutorial', {
            templateUrl: 'pages/tutorial.html',
            controller: 'tutCtrl',
        })
        
        .when('/tutorial/:id', {
            templateUrl: 'pages/tutorial.html',
            controller: 'tutCtrl',
        })
        
        .otherwise({
            redirectTo: '/'
        })

    
});

// Controllers
howToApp.controller('howToCtrl', ['$scope', function($scope) {
    
}]);

howToApp.controller('tutCtrl', ['$scope', function($scope) {
    
}]);