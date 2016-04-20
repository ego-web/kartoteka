'use strict';

/* Services */

var kartotekaServices = angular.module('kartotekaServices', ['ngResource']);

kartotekaServices.factory('User', ['$resource',
  function($resource){
    return $resource('users/users_list.json', {}, {
/*      create: {method:'PUT'},
      saveData: {method:'POST'},
      toggle: {method:'GET', params:{action:'toggle'}} ,*/
      query: {method:'GET', isArray:true}
    });
  }
   ]);

/* kartotekaServices.factory('Data', function($resource){
    var load = $resource('users/users_list.json', {});
    var loadList = ['group'];
    var data = {};
    for (var i=0; i<loadList.length; i++)
      data[loadList[i]] = load.get({name:loadList[i]});
    return function(key){ return data[key]; };
  });*/