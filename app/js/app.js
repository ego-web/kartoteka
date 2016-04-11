'use strict';

/* App Module */

var kartotekaApp = angular.module('kartotekaApp', [
  'ngRoute',
  'kartotekaControllers',
  'kartotekaFilters',
  'kartotekaServices'
]);

kartotekaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/users', {//user_photo
        templateUrl: 'partials/user-list.html',
        controller: 'UserListCtrl'
      }).
      when('/users/:userId', {//user_photo
        templateUrl: 'partials/user-detail.html',
        controller: 'UserDetailCtrl'
      }).
      otherwise({
        redirectTo: '/users' //user_photo
      });
  }]);
