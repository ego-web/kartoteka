'use strict';

/* Controllers */

var kartotekaControllers = angular.module('kartotekaControllers', []);

kartotekaControllers.controller('UserListCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.users_list = User.query();
    $scope.orderProp = 'age';
    $scope.layout ='grid';
    $scope.imageUrl ="img/user_photo/u3.gif";
    $scope.users_group = ["Manager", "Designer","Programmer", "Tester", "Other staff"];
        
        "user.group == group in users_list"
}]);

