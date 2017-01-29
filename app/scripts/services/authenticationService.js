/*
 * Authentication Services
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services');
    serviceModule.factory("AuthenticationService", ["$http", "$q", "$window", function($http, $q, $window) {
        var userInfo;

        function login(email, password) {
            var deferred = $q.defer();
            var params = {
                users_information: {
                    email: email,
                    password: password
                }
            };

            $http.post(URL + "login", params, HEADERS)
                .then(function (result) {
                    debugger;
                    userInfo = {
                        accessToken: result.data.access_token
                    };
                    $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
                    deferred.resolve(userInfo);
                }, function (error) {
                    debugger;
                    window.localStorage.alerts = "Not a Authorized Diver";
                    window.localStorage.alertType = 'alert-danger';
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function logout() {
            // TODO not sure the need for this, currently I do not use this I have a log out function in the index controller
            var deferred = $q.defer();

            $http({
                method: "POST",
                url: URL + "logout",
                headers: {
                    "access_token": userInfo.accessToken
                }
            }).then(function (result) {
                userInfo = null;
                $window.sessionStorage["userInfo"] = null;
                deferred.resolve(result);
            }, function (error) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function getUserInfo() {
            return userInfo;
        }

        function init() {
            if ($window.sessionStorage["userInfo"]) {
                userInfo = JSON.parse($window.sessionStorage["userInfo"]);
            }
        }

        init();

        return {
            login: login,
            logout: logout,
            getUserInfo: getUserInfo
        };

    }]);
}).call(this);
