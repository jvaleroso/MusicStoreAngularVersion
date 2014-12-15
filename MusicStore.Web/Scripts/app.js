var MusicStore;
(function (MusicStore) {
    var app = angular.module('musicStoreApp', ['ngResource', 'ngRoute', 'restangular', 'angularFileUpload']);

    app.config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/Home', {
                templateUrl: '/PartialViews/Home/Index.html'
            }).when('/Store', {
                controller: 'StoreController as storeCtrl',
                templateUrl: '/PartialViews/Store/Store.html'
            }).when('/Store/Browse', {
                controller: 'BrowseAlbumController as browseAlbumCtrl',
                templateUrl: '/PartialViews/Store/Browse.html'
            }).when('/Store/Details', {
                controller: 'StoreController',
                templateUrl: '/PartialViews/Store/Details.html'
            }).when('/StoreManager', {
                controller: 'StoreManagerController as storeMgrCtrl',
                templateUrl: '/PartialViews/StoreManager/StoreManager.html'
            }).when('/StoreManager/Create', {
                controller: 'CreateAlbumController as createAlbumCtrl',
                templateUrl: '/PartialViews/StoreManager/Create.html'
            }).when('/StoreManager/Edit/:albumId', {
                controller: 'EditAlbumController as editAlbumCtrl',
                templateUrl: '/PartialViews/StoreManager/Edit.html'
            }).when('/StoreManager/Details/:albumId', {
                controller: 'AlbumDetailsController as albumDtlsCtrl',
                templateUrl: '/PartialViews/StoreManager/Details.html'
            }).when('/StoreManager/Delete/:albumId', {
                controller: 'DeleteAlbumController as deleteAlbumCtrl',
                templateUrl: '/PartialViews/StoreManager/Delete.html'
            }).when('/Configuration/Artists', {
                controller: 'ArtistController as artistCtrl',
                templateUrl: '/PartialViews/Configuration/Artists.html'
            }).when('/Configuration/Genres', {
                controller: 'GenreController as genreCtrl',
                templateUrl: '/PartialViews/Configuration/Genres.html'
            }).otherwise({
                redirectTo: '/Home'
            });
        }
    ]);
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=app.js.map
