'use strict';

ang.controller('LoginController',
    function LoginController($scope, User, $location, $http) {
	$('#header_display').css('display','none');

	  $scope.login = function(u, p) {
	  	console.log(u,p);
	  	User.name = u;
	    User.password = p;
	    $location.url('/');

	  };
});
