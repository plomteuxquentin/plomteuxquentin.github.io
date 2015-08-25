(function() {
	'use strict';

	angular
		.module('app.member')
		.run(appRun);

	appRun.$inject = ['routerHelper'];
	/* @ngInject */
	function appRun(routerHelper) {
		routerHelper.configureStates(getStates());
	}

	function getStates() {
		return [
			{
				state: 'members',
				config: {
					url: '/',
					templateUrl: 'app/member/members.html',
					controller: 'MembersController',
					controllerAs: 'vm',
					title: 'Team',
					settings: {
						nav: 1,
						content: '<i class="fa fa-group"></i> Team'
					}
				}
			}
		];
	}
})();
