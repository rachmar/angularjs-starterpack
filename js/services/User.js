'use strict';

ang.factory('User', function($rootScope, localStorage) {

  var LOCAL_STORAGE_ID = 'storeUser',
      userString = localStorage[LOCAL_STORAGE_ID];

  var user = userString ? JSON.parse(userString) : {
    name: undefined,
    password: undefined
  };

  $rootScope.$watch(function() { return user; }, function() {
    localStorage[LOCAL_STORAGE_ID] = JSON.stringify(user);
  }, true);

  return user;
});
