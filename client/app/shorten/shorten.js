angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function() {
    // $scope.loading = false;
    Links.addLink($scope.link)
      .then(function() {
        // $scope.loading = true;
        $location.path('/');
      })
      .catch(function(error) {
        console.log(error);
      });
  };

});
