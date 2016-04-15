'use strict';

/* Controllers */

var kartotekaControllers = angular.module('kartotekaControllers', []);


/*kartotekaControllers.controller('IntroCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.intro;
  }]);*/


kartotekaControllers.controller('UserListCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.users_list = User.query();
    $scope.orderProp = 'age';
    $scope.layout ='grid';
    $scope.imageUrl ="../img/user_photo/u3.gif";
    $scope.users_group = ["Manager", "Designer","Programmer", "Tester", "Other staff"];
        
        "user.group == group in users_list"
        // console.log(User.query());
/*var model=User.query();
    console.log($scope.users_list.length);*/


/*var model=User.query(function(){
var data=User;
        // console.log(data);
});
        console.log(model);

var values = $scope.users_list;
var log = [];
angular.forEach(values, function(group, key) {
          // console.log(value);
if(key == 'Manager'){
  this.push(key + ': ' + value);
}}, log);
*/
        // console.log(log);
        // console.log(values);

}]);



/*kartotekaControllers.controller('UserGroupCtrl', ['$scope', 'User',
  function($scope, User) {
    $scope.users_group = ["manager", "designer","programmer", "other_staff", "other_staff once"];

// var values = {name: 'misko', gender: 'male'};
    $scope.users_list = User.query();
    var values =$scope.users_list;
var log = [];
angular.forEach(values, function(value, key){
  this.push(key + ': ' + value);
}, log);
        console.log(log.length);
// expect(log).toEqual(['name: misko', 'gender:male']);


/*for (each in ["manager", "designer","programmer", "other_staff", "other_staff once"]) {
$scope.users_group_list= users_group.filter( 
  function(item){ 
        console.log(item);
    return item ; 
  });
}*/

/* }]);*/

/*kartotekaControllers.controller('UserDetailCtrl', ['$scope', '$routeParams', 'User',
 function($scope, $routeParams, User) {
   $scope.imageUrl;
   // $scope.imageUrl ="img/user_photo/u3.jpg";
   $scope.user = User.get({userId: $routeParams.userId}, function(user) {
     $scope.mainImageUrl = user.images[0];
   });
   $scope.setImage = function(imageUrl) {
     $scope.mainImageUrl = imageUrl;
   };
 }]);*/