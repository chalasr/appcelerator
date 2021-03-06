(function(app) {

	app.controller('AuthController', AuthController);

	function AuthController($auth, $state, $http, $rootScope) {
		var vm = this;
		vm.users; vm.error;
		vm.loginError = false;
		vm.loginErrorText;

		this.authCheck = function() {
			if($auth.isAuthenticated()) {
				$state.go('home');
				$http.get('http://192.168.1.23:8000/api/authenticate/user')
				.success(function(response) {
					$rootScope.authenticated = true;
					$rootScope.currentUser = response.user;
				})
				.error(function(data) {
						alert('' + JSON.stringify(data)+ '');
				});
				if(!localStorage.getItem('user')) {
						var user = JSON.stringify(response.user);
						localStorage.setItem('user', user);
				}
			}
		};

		vm.login = function() {
			var credentials = {
				email: vm.email,
				password: vm.password
			};
			$auth.login(credentials)
			.then(function() {
				return $http.get('http://192.168.1.23:8000/api/authenticate/user');
			}, function(error) {
				vm.loginError = true;
				vm.loginErrorText = error.data.error;
			})
			.then(function(response) {
				if(response) {
						var data = response.data;
						var user = JSON.stringify(response.data.user);
						localStorage.setItem('user', user);
						$rootScope.authenticated = true;
						$rootScope.currentUser = response.data.user;
						$state.go('home');
				}
			});
		};

		vm.getUsers = function() {
			$http.get('http://192.168.1.23:8000/api/authenticate')
			.success(function(users) {
				vm.users = users;
			})
			.error(function(error) {
				vm.error = error;
				alert(error);
			});
		};

		vm.logout = function() {
			$auth.logout().then(function() {
				$state.go('auth');
				localStorage.removeItem('user');
				$rootScope.authenticated = false;
				$rootScope.currentUser = null;
			});
			if($state.current.name !== 'auth' && $auth.isAuthenticated() === false) {
				$state.go('auth');
				localStorage.removeItem('user');
			}
		};
	};

})(angular.module('titanium'));
