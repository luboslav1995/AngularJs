﻿app.controller('PublicAdsController', ['$scope', 'adsData', 'filter', function ($scope, adsData, filter) {
    $scope.ready = false;
    $scope.currentPage = 1;
    $scope.startPage = 1;
    $scope.pageSize = 10;

    function loadPublicAds(filterParams) {
        filterParams = filterParams || {};
        adsData.getPublicAds(filterParams)
            .$promise
            .then(function (data) {
                $scope.adsData = data;
                $scope.ready = true;
            })
    }
    loadPublicAds();
  
    $scope.pageChanged = function () {
        filter.setPageParams({startPage: 0, pageSize: 0});
        adsData.getPublicAds(filter.getParams());
    }

    $scope.$on('categoryClicked', function (event, category) {
        loadPublicAds(filter.getParams());
    });

    $scope.$on('townClicked', function (event, town) {
        loadPublicAds(filter.getParams());
    });

}]);