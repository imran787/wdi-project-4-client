angular
.module('storeApp')
.controller('ItemsShowCtrl', ItemsShowCtrl);

ItemsShowCtrl.$inject = ['$stateParams', 'Item', '$state', 'CurrentUserService', 'Request'];

function ItemsShowCtrl($stateParams, Item, $state, CurrentUserService, Request){
  const vm         = this;
  vm.showRequest   = false;
  vm.user          = CurrentUserService.currentUser;
  vm.item          = Item.get($stateParams);
  vm.createRequest = createRequest;
  vm.itemsDelete   = itemsDelete;

  function createRequest() {
    vm.request.buyer_id = CurrentUserService.currentUser.id;
    vm.request.seller_id = vm.item.seller.id;
    vm.request.status = 'pending';
    vm.request.item_id = vm.item.id;

    if(vm.request.buyer_id !== vm.request.seller_id){
      Request
      .save(vm.request)
      .$promise
      .then(()=>{
        $state.go('itemsIndex');
      });
    }
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
