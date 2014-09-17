'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.service('Phone', ['$resource', '$location',
  function($resource, $location){
     var state = {
       query : '',
       orderProp : 'age',
       recentlyViewed : []
     };

    var api = {
      showPhoneSearch : function(){
        $location.url('/phones');
      },
      addViewEvent : function(phone){
        //would likely use lodash.js for this
        for( var i=state.recentlyViewed.length-1; i>=0; i--) {
          if( state.recentlyViewed[i].id == phone.id) state.recentlyViewed.splice(i,1);
        }
        state.recentlyViewed.unshift(phone);
      },
      clearQuery : function(){
        state.query = '';
      }
    };

    return {
      resource : $resource('phones/:phoneId.json', {}, {
        query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
      }),
      state : state,
      api : api
    }

  }]);
