/*
 * Authentication Services
 */
(function() {
  'use strict';
  var serviceModule = angular.module('myApp.services');
    serviceModule.factory("AuthenticationService", function($http, $q, $window) {
        var userInfo;

        return {
            getUserInfo: function() {
                console.log('below is userInfo from auth seruvce');
                console.log(userInfo);
                return userInfo;
            },

            login: function(email, password) {
                var deferred = $q.defer();

                var params = {
                    auth: {
                    email: email,
                    password: password
                    }
                };

                $http.post(URL + "login", params, HEADERS).then(function(result) {
                    userInfo = {
                      accessToken: result.data.jwt
                    };
                    $window.sessionStorage.userInfo = userInfo.accessToken;
                    deferred.resolve(userInfo);
                }, function(error) {
                    deferred.reject(error);
                });

                return deferred.promise;
            }
        };

        // return {
        //     login: login,
        //     getUserInfo: getUserInfo
        // };
    });
    
}).call(this);
