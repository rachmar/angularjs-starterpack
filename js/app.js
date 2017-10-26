'use strict';

var ang = angular.module('ang', ['ngResource']);

ang.run(function($rootScope, User, $location, $http) {
        $rootScope.globalFoo = function() {
            alert("I'm global foo!");
        };
        $rootScope.logout = function() {
            console.log('logging out');
            User.name = null;
            User.password = null;
            localStorage.clear();
            $location.url('/login');
        };
    });


ang.config(function($routeProvider) {

  $routeProvider.
      when('/dashboard', {
        controller: 'DashboardController',
        templateUrl: 'views/dashboard.html'
      }).
      when('/login', {
        controller: 'LoginController',
        templateUrl: 'views/login.html'
      })
      .otherwise({ redirectTo: '/login' });
});

