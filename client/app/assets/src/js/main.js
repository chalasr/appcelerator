(function(app) {
    app.config(function($stateProvider, $urlRouterProvider, $authProvider) {
			$authProvider.loginUrl = 'http://localhost:8000/api/authenticate';
			$urlRouterProvider.otherwise('/auth');
			$stateProvider
				.state('auth', {
					url: '/auth',
					templateUrl: '../templates/authView.html',
					controller: 'AuthController as auth'
				})
				.state('users', {
					url: '/users',
					templateUrl: '../templates/userView.html',
					controller: 'AuthController as user'
				});
		});
})( angular.module('authApp', ['ui.router', 'satellizer']) );
