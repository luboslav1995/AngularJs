app.directive('myAds', function () {
    return {
        controller: 'MyAdsController',
        restrict: 'E',
        templateUrl: 'templates/user/my-ads.html',
        replace: false,
    }
});
