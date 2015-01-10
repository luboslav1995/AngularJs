app.controller('LogoutController', ['$scope', '$location', 'userData', function ($scope, $location, userData) {
    $scope.logout = function (user) {
        userData.logout(user)
        .$promise
        .then(function (data) {
            $location.path('/');
        });

    };
}]);