angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $http, Links) {
  $scope.data = {};
  $scope.getLinks = function() {
    $http({
      method: "GET",
      url: "/api/links"
    }).then(function(resp) {
      $scope.data.links = resp.data;
    });
  };

  $scope.getLinks();
});