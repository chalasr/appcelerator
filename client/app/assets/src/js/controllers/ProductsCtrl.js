(function(app){

    function ProductsCtrl($http, $state, $rootScope) {
      var self = this;
      self.items = {};
      $state.go('products');
      this.getProducts = function() {
        $state.go('products');
        $http.get('http://localhost:8000/api/products')
        .success(function(data) {
            self.products = data;
        })
        .error(function(error) {
            alert(JSON.stringify(error));
        });
      };

    };

    app.controller('ProductsCtrl', ProductsCtrl);
})(angular.module('front'));
