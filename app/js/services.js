'use strict';

/* Services */

var kartotekaServices = angular.module('kartotekaServices', ['ngResource']);

kartotekaServices.factory('User', ['$resource',
  function($resource){
    return $resource('users/:userId.json', {}, { 
      query: {method:'GET', params:{userId:'users_list'}, isArray:true}
    });
  }]);