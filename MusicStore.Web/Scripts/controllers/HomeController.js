var MusicStore;
(function (MusicStore) {
    (function (Controllers) {
        var Home = (function () {
            function Home() {
            }
            return Home;
        })();
        Controllers.Home = Home;

        angular.module('musicStoreApp').controller('HomeController');
    })(MusicStore.Controllers || (MusicStore.Controllers = {}));
    var Controllers = MusicStore.Controllers;
})(MusicStore || (MusicStore = {}));
//# sourceMappingURL=HomeController.js.map
