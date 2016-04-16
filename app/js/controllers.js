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
    
  }]);

kartotekaControllers.controller('HomeCtrl', ['$scope','$firebaseAuth', '$location',
  function($scope,$firebaseAuth,$location) {
    var ref = new Firebase("https://incandescent-heat-1602.firebaseio.com");
    
    $scope.authObj = $firebaseAuth(ref);
    $scope.user = {};

$scope.SignIn = function(e){
  e.preventDefault();
  var login = $scope.user.login;
  var username = $scope.user.email;
  var password = $scope.user.password;
  var anonim = $scope.user.anonim;
  if(anonim){

    ref.authAnonymously(function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
        $location.path('/users');
}
});
/*ref.authAnonymously(function(error, authData) {  Your Code  }, {
  remember: "sessionOnly"
});*/
  }
  else{
    $scope.authObj.$authWithPassword({
      email: username,
      password: password
    }).then(function(authData) {
      $location.path('/users');
      console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    });

  }
}
}]);