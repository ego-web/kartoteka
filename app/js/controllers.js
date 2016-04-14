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
    $scope.layout ="grid";
    $scope.imageUrl ="../img/user_photo/u3.jpg";
    $scope.users_group = ["manager", "designer","programmer", "other_staff"]


// $scope.setLayout = function(layout) {
//       $scope.layout = layout;
//       if(!layout){layout = "list"}
//        alert("layout "+layout);
//     };

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


