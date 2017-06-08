angular
.module('storeApp')
.controller('ItemsShowCtrl', ItemsShowCtrl);

ItemsShowCtrl.$inject = ['$stateParams', 'Item', '$state', 'CurrentUserService', 'Request'];

function ItemsShowCtrl($stateParams, Item, $state, CurrentUserService, Request){
  const vm = this;

  vm.user = CurrentUserService.currentUser;
  // console.log(vm.user);
  vm.item = Item.get($stateParams);

  vm.request = () => {
    vm.request = {};
    // console.log(vm.item);
    // if ((vm.task.find(x => x.user._id === vm.user._id)) || (vm.task.createdBy === vm.user._id)) {
    //   return console.log('Sorry you can\'t request this job - you either created it, or have already requested it.');
    // } else  {
    //   return console.log('request success');
    // }
    vm.request.buyer_id = CurrentUserService.currentUser.id;
    vm.request.seller_id = vm.item.seller.id;
    vm.request.status = 'pending';
    vm.request.item_id = vm.item.id;
    console.log(vm.request);
    console.log(` user ${vm.request.buyer_id} has made a request!`);

    Request
    .save(vm.request)
    .$promise
    .then(()=>{
      $state.go('itemsIndex');
    });
  };

  // delete in show?
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
