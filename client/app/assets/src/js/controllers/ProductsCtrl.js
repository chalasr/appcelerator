(function(app){

    function ProductsCtrl($http, $state, $rootScope) {
      var self = this;
      self.items = {};
      $state.go('products');
      this.getProducts = function() {
        $state.go('products');
        $http.get('http://192.168.1.23:8000/api/products')
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
