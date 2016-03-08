(function() {
  'use strict';

  var app = angular.module('store', [])

  .controller('StoreCtrl', function() {
    this.product = gem;
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: '....'
  }

})();
