// Module
var howToApp = angular.module('howToApp', []);


// Factories and Services
howToApp.factory('tutorials', ['$http', function ($http) {
    return $http.get('json/tutorials.json')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);

// Controllers
howToApp.controller('howToCtrl', ['$scope', 'tutorials', function ($scope, tutorials) {
    $scope.selectedStep = 1;
    $scope.currTutorialRef = $scope.currTutorialRef || 'firsttutorial';
    $scope.currStep = $scope.currStep || '1';
    $scope.tutList = {};

    $scope.currTutorial = '';
    console.log($scope.currTutorial);

    tutorials.success(function (data) {
        $scope.tutList = data;
            console.log($scope.tutList);
    });
    //    function($scope, tutSvc) {
    //        $scope.step = tutSvc.step;
    //        $scope.$watch('step', function(){
    //           tutSvc.step = $scope.step; 
    //        });
    //    }
}]);


// Directives 
howToApp.directive('tut', function () {
    return {
        restrict: 'E',
        scope: {
            step: '@',
            tutorial: '@'
        },
        link: function ($scope) {
            $scope.$watch('step', function (step) {
                if (step && step.length) {
                    $scope.dynamicTemplateUrlStep1 = '/step' + step + '.html';
                    $scope.dynamicTemplateUrl = $scope.dynamicTemplateUrlStep2 + $scope.dynamicTemplateUrlStep1;
                }
            });
            $scope.$watch('tutorial', function (tutorial) {
                if (tutorial && tutorial.length) {
                    $scope.dynamicTemplateUrlStep2 = 'pages/' + tutorial;
                    $scope.dynamicTemplateUrl = $scope.dynamicTemplateUrlStep2 + $scope.dynamicTemplateUrlStep1
                }
            });
           
        },

        template: '<ng-include src="dynamicTemplateUrl"></ng-include>'
    };
});