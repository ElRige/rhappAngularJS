(function () {
    const app = angular.module('rhapp');

    app.constant('rhappApplicationsListConstant', [
        {
            firstname: 'pierre',
            lastname: 'conord',
            askedSalary: 55000
        },
        {
            firstname: 'malory',
            lastname: 'martin',
            askedSalary: 88000
        },
        {
            firstname: 'justine',
            lastname: 'dupond',
            askedSalary: 44000
        },
        {
            firstname: 'marie',
            lastname: 'dupont',
            askedSalary: 77000
        }
    ]);

    app.constant('prenomsMasculinsConstantes', [
        'pierre', 'malory'
    ]);

    app.constant('prenomsFemininsConstantes', [
        'justine', 'marie'
    ]);
})();