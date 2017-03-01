(function () {
    const app = angular.module('rhapp.home.edit');

    app.controller('HomeEditController', function ($state, $stateParams, homeService) {
        let vm = this;

        vm.errorWhileUpdating = false;

        // Model
        vm.application = {};

        let id = $stateParams.id;
        homeService.getApplication(id)
            .then(function (response) {
                vm.application = response.data.application;
            });

        // Méthod exposées
        vm.update = update;

        // Implémentation des méthode exposées
        function update() {
            homeService.updateApplication(vm.application, id)
                .then(function () {
                    console.log('mon id : ' + id);
                    $state.go('homeDetail({id:id})');
                })
                .catch(function (error) {
                    vm.errorWhileUpdating = true;
                });
        }
    });
})();