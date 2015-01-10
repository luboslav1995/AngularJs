app.directive('publishAds', function () {
    return {
        controller: 'EditProfileController',
        restrict: 'E',
        templateUrl: 'templates/user/edit-profile.html',
        replace: false,
    }
});
