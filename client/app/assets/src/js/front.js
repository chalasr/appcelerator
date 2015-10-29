(function(app) {
    app.config(function($stateProvider) {
			$stateProvider
				.state('products', {
					url: '/products',
					templateUrl: '../templates/front/products.html',
					controller: 'ProductsCtrl as main'
				});
		});
})( angular.module('front', ['ui.router']) );
