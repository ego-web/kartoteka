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

/*kartotekaControllers.controller('AnswerController', 
    function AnswerController($scope){
        $scope.save = function (answer, answerForm){
            if(answerForm.$valid){
                // действия по сохранению
                alert(answer.author + ", ваш ответ сохранен");
            }
        };
      })*/

/*.service('CommonProp', function() {
    var user = '';

    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        }
    };
});*/

      kartotekaControllers.controller('AddPostCtrl', ['$scope', '$firebase', function($scope, $firebase) {

        var firebaseObj = new Firebase("https://incandescent-heat-1602.firebaseio.com");

        $scope.ReadPost = function() {
          firebaseObj.on("child_added", function(snap, prevChildKey) {
            var newPost = snap.val();
            var num = snap.key();
            // n= parseFloat(n)
             // console.log("key: " + n);
           var name = newPost.name;
           var email = newPost.email;
           var phone = newPost.phone;
           var group = newPost.group; 

/*           console.log("id: " +  Object.keys(snap.val()).length);
           console.log("name: " + name);
           console.log("group: " + group);
           console.log("Previous Post ID: " + prevChildKey);*/
         }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
        };

        $scope.AddPost = function() {
          var length = $scope.users_list.length+1;
          var num = "Person "+length;
          var surname = $scope.article.surname;
          var name = $scope.article.name;
          var position = $scope.article.position;
          var age = $scope.article.age;  
          var group = $scope.article.group;  
          var phone = $scope.article.phone;
          var email = $scope.article.email;

          firebaseObj.set({
            [length]:{
              num: num,
              surname: surname,
              name: name,
              position:position,
              age:age,
              group: group,
              phone: phone,
              email: email
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
            e.preventDefault();
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