
var app = angular.module('musicStoreApp', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/Home', {
            controller: 'HomeController',
            templateUrl: '/partials/Home.html'
        })
        .when('/Store', {
            controller: 'StoreController',
            templateUrl: 'partials/Store.html'
        })
        .when('/Store/Browse', {
            controller: 'StoreController',
            templateUrl: '/partials/Browse.html'
        })
        .when('/Cart', {
            controller: 'CartController',
            templateUrl: '/partials/Cart.html'
        })
        .when('/LogOn', {
            controller: 'LogOnController',
            templateUrl: '/partials/LogOn.html'
        })
        .when('/Admin', {
            controller: 'AdminController',
            templateUrl: '/partials/Admin.html'
        })
        .when('/StoreManager', {
            controller: 'StoreManagerController',
            templateUrl: '/partials/StoreManager.html'
        })
        .when('/StoreManager/CreateArtist', {
            controller: 'ArtistController',
            templateUrl: '/partials/Artist.html'
        })
        .when('/StoreManager/CreateGenre', {
            controller: 'GenreController',
            templateUrl: '/partials/Genre.html'
        })
        .otherwise({ redirectTo: '/Home' });
}]);





