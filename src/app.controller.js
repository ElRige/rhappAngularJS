(function () {
    const app = angular.module('rhapp');

    app.controller('RhappController',  function (rhappService) {
        let vm = this;
        vm.applications = rhappService.getApplications();
    });
})();