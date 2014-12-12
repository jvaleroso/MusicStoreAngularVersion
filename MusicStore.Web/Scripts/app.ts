module MusicStore {

    var app = angular.module('musicStoreApp', ['ngResource', 'ngRoute', 'restangular']);

    app.config([
        '$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
            $routeProvider
                .when('/Home', {
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
                .when('/Configuration/Artists', {
                    controller: 'ArtistController as artistCtrl',
                    templateUrl: '/PartialViews/Configuration/Artists.html'
                })
                .when('/Configuration/Genres', {
                    controller: '',
                    templateUrl: '/PartialViews/Configuration/Genres.html'
                })
                .otherwise({
                    redirectTo: '/Home'
                });
        }
    ]);
}

