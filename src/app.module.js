(function () {
    const app = angular.module('rhapp', [
        'ui.router',
        'rhapp.about',
        'rhapp.home',
        'rhapp.news',
        'tmh.dynamicLocale',
        'pascalprecht.translate'
    ]);

    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider, tmhDynamicLocaleProvider) {
        $locationProvider.html5Mode(true);

        $translateProvider.preferredLanguage('pt-pt');
        $translateProvider.useStaticFilesLoader({
            prefix: 'data/languages/',
            suffix: '.json'
        });

        tmhDynamicLocaleProvider.localeLocationPattern('data/i18n/angular-locale_{{locale}}.js');
        tmhDynamicLocaleProvider.defaultLocale('fr-fr');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'src/home/home.part.html',
                controller: 'HomeController as hCtrl'
            })
            .state('homeDetail', {
                url: '/home/:id',
                templateUrl: 'src/home/detail/detail.part.html',
                controller: 'HomeDetailController as hdCtrl'
            })
            .state('homeNew', {
                url: '/home/application/',
                templateUrl: 'src/home/new/new.part.html',
                controller: 'HomeNewController as hnCtrl'
            })
            .state('homeEdit', {
                url: '/home/:id/edit',
                templateUrl: 'src/home/edit/edit.part.html',
                controller: 'HomeEditController as heCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'src/about/about.part.html'
            })
            .state('news', {
                url: '/news',
                templateUrl: 'src/news/news.part.html'
            })

        $urlRouterProvider.otherwise('/home');

    });

    app.controller('RootCtrl', function ($scope, $locale, tmhDynamicLocale, $translate) {
        let locales = {
            current: 'pt-pt',
            availables: [{
                id: 'fr-fr',
                name: 'Français'
            },
            {
                id: 'en-gb',
                name: 'English'
            },
            {
                id: 'pt-pt',
                name: 'Português'
            }]
        };

        $scope.test = 'test';

        $scope.customLocales = locales.availables;
        $scope.changeLocales = (newLocale) => {
            tmhDynamicLocale.set(newLocale);
            $translate.use(newLocale);
        };

    });
})();


