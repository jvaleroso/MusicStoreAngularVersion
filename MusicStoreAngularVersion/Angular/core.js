/// <reference path="../Scripts/angular.js" />


var app = angular.module('core', ['ngResource']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/Home',
        {
            controller: 'HomeController',
            templateUrl: 'Angular/Views/Home/Home.html'
        })
        .when('/Store',
        {
            controller: 'StoreController',
            templateUrl: 'Angular/Views/Store/Store.html'
        })
        .when('/Store/Browse',
        {
            controller: 'StoreController',
            templateUrl: 'Angular/Views/Store/Browse.html'
        })
        .when('/Cart',
        {
            controller: 'CartController',
            templateUrl: 'Angular/Views/Cart/Cart.html'
        })
        .otherwise({ redirectTo: '/Home' });
});


