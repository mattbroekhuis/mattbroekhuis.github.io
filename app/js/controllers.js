'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.resource.query();
    $scope.state = Phone.state;
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {

    Phone.api.clearQuery();

    $scope.phone = Phone.resource.get({phoneId: $routeParams.phoneId}, function(phone) {
      Phone.api.addViewEvent(phone);
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
