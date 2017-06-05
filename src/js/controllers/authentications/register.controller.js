angular
.module('storeApp')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', '$state', 'CurrentUserService'];

function RegisterCtrl(User, $state, CurrentUserService){
  const vm = this;

  vm.emailValidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  vm.register = () => {
    console.log(vm.user);
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
