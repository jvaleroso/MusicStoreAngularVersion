var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var NavbarController = (function () {
            function NavbarController($location) {
                this.$location = $location;
            }
            NavbarController.prototype.getClass = function (path) {
                var url = this.$location.path();
                return url.substr(0, path.length) === path && path.length == url.length;
            };
            return NavbarController;
        })();
        Controllers.NavbarController = NavbarController;

        angular.module('musicStoreApp').controller('NavbarController', [
            '$location',
            NavbarController
        ]);
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=NavbarController.js.map
