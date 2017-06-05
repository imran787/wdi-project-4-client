angular
  .module('storeApp')
  .controller('UsersIndexCtrl', UsersIndexCtrl);

UsersIndexCtrl.$inject = ['User'];
function UsersIndexCtrl(User) {
  const vm = this;


  usersIndex();

  function usersIndex() {
    vm.users = User.query();
  }


}
