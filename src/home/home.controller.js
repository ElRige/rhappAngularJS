(function () {
    const app = angular.module('rhapp.home');

    app.controller('HomeController', function ($scope, homeService) {
        let vm = this;
        homeService.getApplications().then(function (response) {
            vm.applications = response.data.aplicationsList;
        });

        vm.addApplication = function () {
            var application = {
                "firstname": "michel",
                "lastname": "dupont",
                "askedSalary": 2234,
                "experiences": [
                    {
                        "from": "2012-04-23T18:25:43.511Z",
                        "to": "2012-04-23T18:25:43.511Z",
                        "description": "kjsdhfk"
                    }]
            };
            homeService.addApplication(application).then(function (response) {
            });
        };

    });
})();


