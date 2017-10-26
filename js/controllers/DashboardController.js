'use strict';

ang.controller('DashboardController', function DashboardController($scope, $rootScope, User, $location) {
 $('#header_display').css('display','inline');

  // if (!User.name || !User.password) {
  //   $location.url('/login');
  // }
  // $rootScope.globalFoo();

  $scope.search = function(data){
  	console.log("SEARCH FUNCTION");
  	console.log(data);
  	var error = true;

  	if(error){
  		alert('The name is not yet registered.');
  	}
  }


  $scope.new_customer = function(data){
  	console.log("NEW CUSTOMER FUNCTION");
  	console.log(data);
  }

});
