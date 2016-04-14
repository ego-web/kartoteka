'use strict';

/* Controllers */

var kartotekaControllers = angular.module('kartotekaControllers', []);


kartotekaControllers.controller('IntroCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.intro;
  }]);

kartotekaControllers.controller('UserListCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.users_list = User.query();
    $scope.orderProp = 'age';
    $scope.layout ="trello";
    $scope.imageUrl ="../img/user_photo/u3.jpg";
    console.log($scope.users_list);

  }]);

/*kartotekaControllers.controller('UserGroupCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.users_group = ["manager", "designer","programmer", "other_staff", "other_staff once"];
for (each in $scope.users_group) {
$scope.users_group_list= users_list.filter( 
  function(item){ 
    return item ; 
    alert(users_list);
    alert($scope.users_group);
    alert(item);
    alert(users_group_list);
  });
}
 }]);*/