(function () {
    'use strict';

    angular.module('akashmitrapp')
        .config(akashmitrAppConfiguration);

    function akashmitrAppConfiguration($routeProvider) {

        // $routeProvider
        //     .when('/home', {
        //         url: '/home',
        //         templateUrl: "pages/landing.html",
        //         controller: "LandingController"
        //     })
        //     .when('/about', {
        //         url: '/about',
        //         templateUrl: "pages/about.html",
        //         controller: "AboutController"
        //     })
        //     .when('/about', {
        //         url: '/about',
        //         templateUrl: "pages/about.html",
        //         controller: "BlogController"
        //     })
        //     .otherwise({
        //         redirectTo: '/home'
        //     });

    }

}());