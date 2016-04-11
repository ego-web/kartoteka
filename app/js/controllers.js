'use strict';

/* Controllers */

var kartotekaControllers = angular.module('kartotekaControllers', []);

kartotekaControllers.controller('UserListCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.users_list = User.query();
    $scope.orderProp = 'age';
    $scope.layout = 'trello';
  }]);

kartotekaControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', 'User',
  function($scope, $routeParams, User) {
    $scope.user = User.get({userId: $routeParams.userId}, function(user) {
      $scope.mainImageUrl = user.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);


