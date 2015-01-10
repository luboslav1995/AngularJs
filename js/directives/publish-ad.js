app.directive('publishAds', function () {
    return {
        controller: 'PublishAdController',
        restrict: 'E',
        templateUrl: 'templates/user/publish-ads.html',
        replace: false,
    }
});
