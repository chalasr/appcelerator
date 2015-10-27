(function(app){
    function MainCtrl($http, $state) {
        var self = this;
        self.items = {};
        this.name = 'L\'AtelierMac.com for iOs';
        this.getData = function() {
            $http.get('http://api.chalasdev.fr/products.json')
            .success(function(data) {
                self.items = data;
            })
            .error(function(data) {
                alert(data.toString());
            })
        };
    };

    app.controller('MainCtrl', MainCtrl);
})(angular.module('authApp'));
