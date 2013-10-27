/// <reference path="../Scripts/angular.js" />


var app = angular.module('core', ['ngResource']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/Home',
        {
            controller: 'HomeController',
            templateUrl: 'Angular/Partials/Home.html'
        })
        .when('/Store',
        {
            controller: 'StoreController',
            templateUrl: 'Angular/Partials/Store/Store.html'
        })
        .when('/Store/Browse',
        {
            controller: 'StoreController',
            templateUrl: 'Angular/Partials/Store/Browse.html'
        })
        .when('/Cart',
        {
            controller: 'CartController',
            templateUrl: 'Angular/Partials/Cart/Cart.html'
        })
        .when('/LogOn', {
            controller: 'LogOnController',
            templateUrl: 'Angular/Partials/LogOn/LogOn.html'
        })
        .when('/Admin', {
            controller: 'Admin',
            templateUrl: 'Angular/Partials/Admin/Admin.html'
        })
        .otherwise({ redirectTo: '/Home' });
});


