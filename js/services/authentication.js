﻿app.factory('authentication', function () {
    var key = 'user';
    function saveUserData(data) {
        localStorage.setItem(key, angular.toJson(data));
    }

    function getUserData(data) {
        return angular.fromJson(localStorage.getItem(key));
        
    }

    function getName() {
        var currentUserName = getUserData().username;
        return currentUserName;
    }

    function getHeaders() {
        var headers = {};
        var userData = getUserData;
        if (userData) {
            headers.Authorization = 'Bearer ' + getUserData().access_token;
            
        };
        return headers;
    }
    function getToken() {
        var userData = getName();

        if (userData) {
            return 'Bearer ' + userData.access_token;
        }
        return null;
    }
    function removeUser() {
        localStorage.removeItem(key);
    }

    function isAdmin() {
        var isAdmin = getUserData().isAdmin;
        return isAdmin;
    }
    function isLoggedIn() {
        return !!getUserData();
    }

    return {
        saveUser: saveUserData,
        getUser: getUserData,
        getHeaders: getHeaders,
        removeUser: removeUser,
        isAdmin: isAdmin,
        isLoggedIn: isLoggedIn,
        getName: getName,
        getToken: getToken
    }

});