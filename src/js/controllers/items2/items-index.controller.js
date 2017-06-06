angular
.module('storeApp')
.controller('ItemsIndexCtrl', ItemsIndexCtrl);

ItemsIndexCtrl.$inject = ['Item'];

function ItemsIndexCtrl(Item){
  const vm = this;
  itemsIndex();

  function itemsIndex(){
    vm.items = Item.query();
  }

}
