angular
  .module('storeApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [
  '$http',
  'CurrentUserService',
  'TokenService',
  '$rootScope',
  '$state'
];
function MainCtrl(
  $http,
  CurrentUserService,
  TokenService,
  $rootScope,
  $state
) {
  const vm = this;

  vm.isNavCollapsed = true;

  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
  });
  vm.logout = () => {
    CurrentUserService.removeUser();
    $state.go('login');
  };
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });



}
