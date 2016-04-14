'use strict';

/* Controllers */

var kartotekaControllers = angular.module('kartotekaControllers', []);

/*kartotekaControllers.controller('SlideController', ['$scope', '$location', function($scope, $location, User){ 
$scope.goNext = function (hash) { 
$location.path(hash);
 };
}
 ]);*/

kartotekaControllers.controller('IntroCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.intro;
  }]);

kartotekaControllers.controller('UserListCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.users_list = User.query();
    $scope.orderProp = 'age';
    $scope.layout = 'trello';
  }]);

kartotekaControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', 'User',
  function($scope, $routeParams, User) {
   $scope.imageUrl;
   $scope.imageUrl ="img/user_photo/u3.jpg";
      alert("userId");
    $scope.user = User.get({userId: $routeParams.userId}, function(user) {
      $scope.mainImageUrl = user.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);


