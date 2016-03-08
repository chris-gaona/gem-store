(function() {
  'use strict';

  var app = angular.module('store', [])

  .controller('StoreCtrl', function() {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine...Dodeca is one of those gems.',
      canPurchase: true,
      soldOut: false
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "...",
      canPurchase: true,
      soldOut: false
    }
  ];

})();
