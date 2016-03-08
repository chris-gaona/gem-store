(function() {
  'use strict';

  var app = angular.module('store', [])

  .controller('StoreCtrl', function() {
    this.products = gems;
  })

  .controller('PanelCtrl', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(selected) {
      return this.tab === selected;
    };
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Some gems have hidden qualities beyond their luster, beyond their shine...Dodeca is one of those gems.',
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: "image.jpg",
          thumb: "thumb-image.jpg"
        },
        {
          full: "image2.jpg",
          thumb: "thumb2-image.jpg"
        }
      ]
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "...",
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: "image.jpg",
          thumb: "thumb-image.jpg"
        },
        {
          full: "image2.jpg",
          thumb: "thumb2-image.jpg"
        }
      ]
    }
  ];

})();
