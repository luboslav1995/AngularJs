app.controller('HomeController', ['$scope', 'authentication', function ($scope, authentication) {

    $scope.pageTitle = "home";
    $scope.isLoggedIn = authentication.isLoggedIn();
    if (authentication.isLoggedIn()) {
        $scope.currentUser = authentication.getName();
    }

    $scope.logout = function () {
        authentication.removeUser();
        window.location.reload(false);
    }

}]);