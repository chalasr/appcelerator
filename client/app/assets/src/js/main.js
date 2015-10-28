(function(app) {
    app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
			$authProvider.loginUrl = 'http://localhost:8000/api/authenticate';
			$urlRouterProvider.otherwise('/');
			$stateProvider
				.state('home', {
					url: '/',
					templateUrl: '../templates/home.html',
					controller: 'MainCtrl as main'
				})
				.state('auth', {
					url: '/auth',
					templateUrl: '../templates/login.html',
					controller: 'AuthController as auth'
				});
		});
})( angular.module('titanium', ['ui.router', 'satellizer']) );
