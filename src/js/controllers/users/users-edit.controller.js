angular
.module('storeApp')
.controller('UserEditCtrl', UserEditCtrl);

UserEditCtrl.$inject = ['User', '$stateParams', '$state'];
function UserEditCtrl(User, $stateParams, $state){
  const vm = this;
  vm.user = User.get($stateParams);
  vm.update = userUpdate;

  function userUpdate(){
    User
    .update({id: $stateParams.id}, vm.user)
    .$promise
    .then(()=>{
      console.log(vm.user);
      console.log($stateParams);
      $state.go('usersShow');
    });
  }
}
