angular
  .module('storeApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function LoginCtrl(User, CurrentUserService, $state) {
  const vm = this;

  vm.login = () => {
    User
      .login(vm.user)
      .$promise
      .then(() => {
        CurrentUserService.getUser();
        // $state.go('itemsIndex');
        if(vm.user){
          $state.go('itemsIndex');
        }
      }, err => {
        console.log('LoginCtrl error: ', err);
      });
  };
}
