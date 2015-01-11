'use strict';
var app = angular.module('adsApp', ['ngRoute', 'ngResource', 'LocalStorageModule', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/#', {
        templateUrl: '/templates/home.html',
        controller: 'HomeController'
    });
    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
    });
    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });
    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-ads.html',
        controller: 'PublishAdController'
    });
    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/my-ads.html',
        controller: 'MyAdsController'
    });
    $routeProvider.when('/user/editProfile', {
        templateUrl: 'templates/user/edit-profile.html',
        controller: 'EditProfileController'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });

    function showErrorMessage(msg) {
        noty({
            text: msg,
            type: 'error',
            layout: 'topCenter',
            timeout: 5000
        }
        );
    }

    function showSuccessMessage(msg) {
        noty({
            text: msg,
            type: 'success',
            layout: 'topCenter',
            timeout: 5000
        });
    }
}]);