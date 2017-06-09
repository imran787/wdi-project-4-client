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
    //   return console.log('Sorry you can\'t request this item - you either created it, or have already requested it.');
    // } else  {
    //   return console.log('request success');
    // }
    vm.request.buyer_id = CurrentUserService.currentUser.id;
    vm.request.seller_id = vm.item.seller.id;
    vm.request.status = 'pending';
    vm.request.item_id = vm.item.id;
    console.log(vm.request);
    console.log(`user ${vm.request.buyer_id} has made a request!`);
    // console.log(vm.request.seller.id);

    ///if current user who has request this is the current user then cant make request
    if(vm.request.buyer_id === vm.request.seller_id){
      console.log('no no! you\'ve been a bad bad boy!!');
    } else{
      console.log('what\'s youre name, who\'s youre daddy!....is he rich like me??');
      Request
      .save(vm.request)
      .$promise
      .then(()=>{
        $state.go('itemsIndex');
        // console.log(vm.request);
      });

    }







    // if (vm.item.assignedTo.find(x => x._id === user._id)) {
    //
    //
    //     return console.log('Sorry that user is already assigned to this task.');
    //   }
    //   vm.task.assignedTo.push(user._id);
    //   if (!vm.task.charity) vm.task.charity = charity._id;
    //   vm.task.requestedBy.splice($index, 1);
    //   Task
    //     .update({ id: $stateParams.id }, vm.task)
    //     .$promise
    //     .then(() => {
    //       vm.modalText = 'User successfully assigned.';
    //       vm.showModal();
    //       vm.task = Task.get($stateParams);
    //     });
    // };
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




//seller accepts or rejects request made on item?


// vm.assign = (user, charity, $index) => {
//   if (vm.task.assignedTo.find(x => x._id === user._id)) {
//     vm.modalText = 'Sorry that user is already assign to this task.';
//     vm.showModal();
//     return console.log('Sorry that user is already assigned to this task.');
//   }
//   vm.task.assignedTo.push(user._id);
//   if (!vm.task.charity) vm.task.charity = charity._id;
//   vm.task.requestedBy.splice($index, 1);
//   Task
//     .update({ id: $stateParams.id }, vm.task)
//     .$promise
//     .then(() => {
//       vm.modalText = 'User successfully assigned.';
//       vm.showModal();
//       vm.task = Task.get($stateParams);
//     });
// };
//
// vm.showModal = () => {
//   vm.requestModal.style.display = 'block';
// };
// window.onclick = function(event) {
//   if (event.target == vm.requestModal) {
//     vm.requestModal.style.display = 'none';
//   }
// };
//
// vm.closeModal = () => {
//   vm.requestModal.style.display = 'none';
// };
//
// vm.requestModal = document.getElementById('requestModal');
//
// vm.reject = (user, charity, $index) => {
//   vm.task.requestedBy.splice($index, 1);
//   Task
//     .update({ id: $stateParams.id }, vm.task)
//     .$promise
//     .then(() => {
//       vm.task = Task.get($stateParams);
//     });
// };
