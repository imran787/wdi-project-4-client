angular
.module('storeApp')
.controller('ItemsNewCtrl', ItemsNewCtrl);

ItemsNewCtrl.$inject = ['$state', 'Item', 'CurrentUserService'];
function ItemsNewCtrl($state, Item){
  const vm = this;
  vm.create = itemCreate;

  function itemCreate(){
    console.log(vm.item);
    Item
    .save(vm.item)
    .$promise
    .then(()=>{
      $state.go('itemsIndex');
    });
  }
}
