
var app = angular.module('musicStoreApp', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/Home', {
            controller: 'HomeController',
            templateUrl: '/PartialViews/Home/Index.html'
        })
        .when('/Store', {
            controller: 'StoreController',
            templateUrl: '/PartialViews/Store/Store.html'
        })
        .when('/Store/Browse', {
            controller: 'StoreController',
            templateUrl: '/PartialViews/Store/Browse.html'
        })
        .when('/Store/Details', {
            controller: 'StoreController',
            templateUrl: '/PartialViews/Store/Details.html'
        })
        .when('/StoreManager', {
            controller: 'StoreManagerController',
            templateUrl: '/PartialViews/StoreManager/StoreManager.html'
        })
        .when('/StoreManager/Create', {
            controller: 'StoreManagerController',
            templateUrl: '/PartialViews/StoreManager/Create.html'
        })
        .when('/StoreManager/Edit/:id', {
            controller: 'StoreManagerController',
            templateUrl: '/PartialViews/StoreManager/Edit.html'
        })
        .when('/StoreManager/Details/:id', {
            controller: 'StoreManagerController',
            templateUrl: '/PartialViews/StoreManager/Details.html'
        })
        .when('/StoreManager/Delete/:id', {
            controller: 'StoreManagerController',
            templateUrl: '/PartialViews/StoreManager/Delete.html'
        })
        .otherwise('/Home');
}]);





