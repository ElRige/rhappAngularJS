(function () {
	const app = angular.module('rhapp');

	app.factory('rhappService', function ($filter, rhappApplicationsListConstant, prenomsMasculinsConstantes, prenomsFemininsConstantes) {

		let applications = rhappApplicationsListConstant;

		function getApplications() {
			return $filter('addCivility')(applications, prenomsFemininsConstantes, prenomsMasculinsConstantes);
		}

		return {
			getApplications
		};

	});

	app.filter('addCivility', function () {
		return function (items, fem, masc) {
			for (let item of items) {
				if (fem.indexOf(item.firstname) >= 0) {
					item.civility = 'Mme';
				}
				if (masc.indexOf(item.firstname) >= 0) {
					item.civility = 'M';
				}
			}
			return items;
		};
	});

	app.filter('stringCapitalizer', function () {
		return function (item, allString, pos) {
			if (allString) {
				item = item.toUpperCase();
			} else {
				item = item.replace(item[pos - 1], item[pos - 1].toUpperCase());
			}
			return item;
		};
	});

})();