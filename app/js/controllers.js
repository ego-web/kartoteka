'use strict';

/* Controllers */

var kartotekaControllers = angular.module('kartotekaControllers', []);

kartotekaControllers.controller('UserListCtrl', ['$scope', 'User', /*'Data',*/
  function($scope, User/*, Data*/) {
    $scope.users_list = User.query(
      function(data){
     var i = 0;
     angular.forEach(data, function(v,k) { data[k]._id = i++; 
 });
   }
  );
    // $scope.groupgroup = Data('group');
    $scope.orderProp = 'age';
    $scope.layout ='grid';
    $scope.imageUrl ="img/user_photo/u3.gif";
    $scope.users_group = ["Manager", "Designer","Programmer", "Tester", "Other staff"];
  }]);

kartotekaControllers.controller('AddPostCtrl', ['$scope', '$firebase', function($scope, $firebase) {

    $scope.AddPost = function() {
var name = $scope.article.name;
var email = $scope.article.email;
var phone = $scope.article.phone;
var group = $scope.article.group;  
    
var firebaseObj = new Firebase("https://incandescent-heat-1602.firebaseio.com");

firebaseObj.set({
  "301":{
name: name,
email: email,
phone: phone,
group: group
}

});
    }
}]);

kartotekaControllers.controller('AuthCtrl', ['$scope', '$location','$firebaseAuth',
  function($scope,$location,$firebaseAuth) {
    var ref = new Firebase("https://incandescent-heat-1602.firebaseio.com");
    
    $scope.authObj = $firebaseAuth(ref);
    $scope.user = {};
    $scope.erorr =false;

    $scope.SignIn = function(e){
  // e.preventDefault();
  var login = $scope.user.login;
  if(login===undefined){login="Anonimus"};
  var username = $scope.user.email;
  var password = $scope.user.password;
  var anonim = $scope.user.anonim;
  if(anonim){
    ref.unauth();
    $location.path('/users');
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
     $scope.user.anonim=false;
    return $scope.user;
  });

}
}
}]);