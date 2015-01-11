app.controller('PublishAdController', ['$scope', 'categoriesData', 'townsData', 'adsData', 'authentication', '$http', function ($scope, townsData, categoriesData, adsData, authentcation, $http) {
    $http.defaults.headers.common['Authorization'] = authentcation.getToken();

    //categoriesData.getCategories()
    //            .$promise
    //            .then(function (data) {
    //                $scope.categoriesData = data;
    //            }, function (error) {
    //                console.log(error);
    //            });

    //townsData.getTowns()
    //        .$promise
    //        .then(function (data) {
    //            $scope.townsData = data;
    //        }, function (error) {
    //            console.log(error);
    //        });
    
    $scope.fileSelected = function (fileInputField) {
        delete $scope.ad.imageDataUrl;
        var file = fileInputField.files[0];

        if (file.type.match(/image\/.*/)) {
            var reader = new FileReader();

            reader.onload = function () {
                $scope.ad.imageDataURL = reader.result;
                $("#image-box").html("<img src='" + reader.result + "'>");
            };

            reader.readAsDataURL(file);
        } else {
            $("#image-box").html("<p>File type not supported!</p>");
        }
    };

    $scope.publish = function (ad) {
        adsData.add(ad);
        window.location.href = "#/user/ads/myAds";
    };

}]);