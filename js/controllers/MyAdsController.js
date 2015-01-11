'use strict';

app.controller('MyAdsController', function ($scope, $http, adsData, authentication) {
    $http.defaults.headers.common['Authorization'] = authentication.getToken();

    adsData.getAdById().$promise.then(function (data) {
        $scope.ads = data;
    }, function (error) {
        console.log(error);
    });
});