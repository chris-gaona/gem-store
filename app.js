(function() {
  'use strict';

  //adds store-products as dependency to store app
  var app = angular.module('store', ['store-products'])

  .controller('StoreCtrl', ['$http', '$log', function($http, $log) {
    this.products = gems;

    //this following is used when fetching data from api
    // var store = this;
    // store.products = [];

    //way to fetch json from an api long version
    // $http({method: 'GET', url: '/products.json'});
    //way to fetch json from an api short version
    // $http.get('/products.json', {apiKey: 'myApiKey'}).success(function(response) {
    //   this.products = response;
    // });
  }])

  .controller('PanelCtrl', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(selected) {
      return this.tab === selected;
    };
  })

  .controller('ReviewCtrl', function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
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
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 4,
          body: "I like gems!",
          author: "author@email.com"
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
      ],
      reviews: [
        {
          stars: 3,
          body: "I love this product!",
          author: "joe@thomas.com"
        },
        {
          stars: 4,
          body: "I like gems!",
          author: "author@email.com"
        }
      ]
    }
  ];

})();
