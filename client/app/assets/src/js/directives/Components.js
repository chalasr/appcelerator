(function(app) {

  function Navbar() {
    return {
        restrict: 'AE',
        replace: 'true',
        template:
        '<div class="form-group" ng-if="authenticated">' +
    			'<button class="btn btn-primary" ng-click="user.getUsers()">Users</button>' +
    			'<button class="btn btn-danger" ng-click="user.logout()">Logout</button>' +
        '</div>',
        bindToController: true,
        controllerAs: 'user',
        controller: 'AuthController'
    };
  };
  //
  // function UsersList() {
  //   return {
  //       restrict: 'AE',
  //       replace: 'true',
  //       template:
  //       '<div class="well">' +
  //         '<ul class="list-group" ng-if="user.users">' +
  //     			'<li class="list-group-item" ng-repeat="user in user.users">' +
  //     				'<h4>{{user.name}}</h4>' +
  //     				'<h5>{{user.email}}</h5>' +
  //     			'</li>' +
  //     		'</ul>' +
  //       '</div>' +
  //       '<div class="alert alert-danger" ng-if="user.error">' +
  //   			'<strong>There was an error: </strong> {{user.error.error}}' +
  //   		'<br>Please go back and login again' +
  //   		'</div>',
  //       bindToController: true,
  //       controllerAs: 'user',
  //       controller: 'AuthController'
  //   };
  // };
  app.directive('navbar', Navbar);
  // app.directive('usersList', UsersList);

})(angular.module('titanium'));
