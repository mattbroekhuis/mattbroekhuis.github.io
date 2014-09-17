'use strict';

/* Directives */

var phonecatDirectives = angular.module('phonecatDirectives', [

]);

phonecatDirectives.directive('phoneSearch', ['Phone',
  function(Phone) {
  return {
    scope: {},
    replace: true,
    templateUrl : 'partials/phone-search.html',
    link: function ($scope) {
      $scope.state = Phone.state;
      $scope.api = Phone.api;
    }
  };
}]);

phonecatDirectives.directive('recentPhones', ['Phone',
function(Phone){
  return {
    scope : {},
    replace : true,
    templateUrl : 'partials/recent-phones.html',
    link : function(scope){
      scope.state = Phone.state;
    }
  }
}]);