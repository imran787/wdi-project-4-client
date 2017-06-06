angular
.module('storeApp')
.controller('ItemsShowCtrl', ItemsShowCtrl);

ItemsShowCtrl.$inject = ['$stateParams', 'Item', '$state'];

function ItemsShowCtrl($stateParams, Item, $state){
  const vm = this;
  vm.delete = itemsDelete;

  itemsShow();

  function itemsShow(){
    vm.item = Item.get($stateParams);

  }

  function itemsDelete(){
    Item
    .delete({ id: vm.item.id})
    .$promise
    .then(()=>{
      $state.go('itemsIndex');
    });
  }
}
