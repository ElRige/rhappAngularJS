(function () {
    const app = angular.module('rhapp.home.new');

    app.controller('HomeNewController', function ($state, homeService) {
        let vm = this;

        vm.errorWhileAdding = false;

        // Model
        vm.application = {};

        // Méthod exposées
        vm.save = save;

        // Implémentation des méthode exposées
        function save() {
            homeService.addApplication(vm.application)
                .then(function () {
                    $state.go('home');
                })
                .catch(function (error) {
                    vm.errorWhileAdding = true;
                });
        }
    });
})();