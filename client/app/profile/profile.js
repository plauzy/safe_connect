angular.module('shortly.profile', [])

.controller('ProfileController', function ($scope, Auth) {
  console.log(Auth.isAuth())
  $scope.loggedIn = function() {
    console.log(Auth.isAuth())
    return Auth.isAuth();
  };

  $scope.logout = function() {
    Auth.signout();
  };
});
