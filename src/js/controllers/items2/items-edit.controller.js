angular
 .module('storeApp')
 .controller('ItemsEditCtrl', ItemsEditCtrl);

 ItemsEditCtrl.$inject =['$stateParams', '$state', 'Item'];

 function ItemsEditCtrl($stateParams, $state, Item){
   const vm = this;
   vm.item = Item.get($stateParams);
   vm.update = itemUpdate;

   function itemUpdate(){
     Item
      .update({ id: $stateParams.id}, vm.item)
      .$promise
      .then(()=>{
        $state.go('itemsIndex');
      });
   }
 }
