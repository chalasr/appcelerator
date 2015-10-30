(function(app) {
    app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
			$authProvider.loginUrl = 'http://192.168.1.23:8000/api/authenticate';
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: '../templates/admin/home.html',
					controller: 'MainCtrl as main'
				})
				.state('auth', {
					url: '/auth',
					templateUrl: '../templates/admin/login.html',
					controller: 'AuthController as auth'
				});
		});
})( angular.module('titanium', ['ui.router', 'satellizer']) );
