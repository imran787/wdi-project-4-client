angular
.module('storeApp')
.controller('ItemsNewCtrl', ItemsNewCtrl);

ItemsNewCtrl.$inject = ['$state', 'Item'];
function ItemsNewCtrl($state, Item){
  const vm = this;
  vm.create = itemCreate;

  function itemCreate(){
    Item
    .save(vm.item)
    .$promise
    .then(()=>{
      $state.go('itemsIndex');
    });
  }
}
