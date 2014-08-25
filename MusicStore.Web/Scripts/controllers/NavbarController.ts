module MusicStore.Controllers {

    export class NavbarController {
        constructor(
            private $location: ng.ILocationService) { }

        getClass(path: string): boolean {
            var url = this.$location.path();
            return url.substr(0, path.length) === path && path.length == url.length;
        }
    }

    angular.module('musicStoreApp')
        .controller('NavbarController', [
            '$location',
            NavbarController
        ]);
}


