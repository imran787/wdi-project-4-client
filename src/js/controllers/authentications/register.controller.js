angular
.module('storeApp')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', '$state', 'CurrentUserService']

function RegisterCtrl(User, $state, CurrentUserService){
  const vm = this;
  vm.register = () => {
    User
    .register(vm.user)
    .$promise
    .then(()=>{
      CurrentUserService.getUser();
      $state.go('itemsIndex');
    }, err => {
      console.log(err);
    });
  };
}
