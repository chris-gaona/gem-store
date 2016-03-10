(function() {
  'use strict';

  var app = angular.module('store-products', [])
  .directive('productTitle', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
      // controller: function() {
      //
      // },
      // controllerAs: 'panels'
    };
  })

  .directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html'
      // controller: function() {
      //
      // },
      // controllerAs: 'panels'
    };
  })

  .directive('productPanels', function() {
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html'
      // controller: function() {
      //
      // },
      // controllerAs: 'panels'
    };
  });
})();
