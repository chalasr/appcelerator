(function(app){

    function MainCtrl($http, $state, $auth, $rootScope) {
      var self = this;
      self.items = {};

      this.authCheck = function() {
        if ($auth.isAuthenticated()) {
            $http.get("http://localhost:8000/api/authenticate/user").success(function(response) {
                $rootScope.authenticated = true;
                $rootScope.currentUser = response.user;
            }).error(function(data) {
                alert('error');
                alert("" + JSON.stringify(data));
            });
            if (!localStorage.getItem("user")) {
                var user = JSON.stringify(response.user);
                localStorage.setItem("user", user);
            }
        } else
            $state.go("auth");
      };

    };

    app.controller('MainCtrl', MainCtrl);
})(angular.module('titanium'));
