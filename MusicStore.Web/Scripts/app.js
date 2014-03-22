
var app = angular.module('musicStoreApp', ['ngResource', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        //.when('/Home', {
        //    controller: 'HomeController',
        //    templateUrl: 'Views/Home/Index.cshtml'
        //})
        .when('/Store', {
            controller: 'StoreController',
            templateUrl: 'Views/Store/Store.cshtml'
        })
        .when('/Store/Browse', {
            controller: 'StoreController',
            templateUrl: 'Views/Store/Browse.cshtml'
        })
        .when('/Store/Details', {
            controller: 'StoreController',
            templateUrl: 'Views/Store/Details.cshtml'
        })
        .when('/StoreManager', {
            controller: 'StoreManagerController',
            templateUrl: 'Views/StoreManager/StoreManager.cshtml'
        })
        .when('/StoreManager/Create', {
            controller: 'StoreManagerController',
            templateUrl: 'Views/StoreManager/Create.cshtml'
        })
        .when('/StoreManager/Edit/:id', {
            controller: 'StoreManagerController',
            templateUrl: 'Views/StoreManager/Edit.cshtml'
        })
        .when('/StoreManager/Details/:id', {
            controller: 'StoreManagerController',
            templateUrl: 'Views/StoreManager/Details.cshtml'
        })
        .when('/StoreManager/Delete/:id', {
            controller: 'StoreManagerController',
            templateUrl: 'Views/StoreManager/Delete.cshtml'
        });
    //.otherwise({
    //    controller: 'StoreController',
    //    templateUrl: 'Views/Store/Browse.cshtml'
    //});
}]);





