angular
.module('storeApp')
.controller('ItemsIndexCtrl', ItemsIndexCtrl);

ItemsIndexCtrl.$inject = ['Item', 'CurrentUserService', 'API', '$http', '$rootScope', 'Request', '$stateParams'];

function ItemsIndexCtrl(Item, CurrentUserService, API, $http, $rootScope, Request, $stateParams){
  const vm = this;
  itemsIndex();

  function itemsIndex(){
    vm.items = Item.query();
  }

  vm.user1 = $rootScope.currentUser;

  vm.offers = function() {
    vm.itemsArray = [];
    $rootScope.currentUser.sent_requests.forEach(function(offer) {
      // console.log(offer);
      // console.log(vm.user1);
      //making a get request to get offer object by id
      $http.get(`${API}/items/${offer.item_id}`)
      .then(function(response) {
        //pushing data into empty array
        vm.itemsArray.push(response.data);
        console.log(vm.itemsArray);
      });
    });
  };

  vm.requests = function(){
    vm.reqArray = [];
    $rootScope.currentUser.received_requests.forEach((request) => {
      // console.log(request);
      $http.get(`${API}/items/${request.item_id}`)
      .then(function(response) {
        console.log(response.data.requests);
        vm.reqArray = (response.data.requests);
        // console.log(vm.reqArray);
      });
    });
  };

  vm.assign = (request) => {

    if(!CurrentUserService.currentUser.id === request.seller_id ){
      // console.log('firing');
      console.log('wrong');

    } else {
      request.status = 'accepted';
      // console.log('request:', request);

      Request
      .confirmedRequest({ id: request.id}, request)
      .$promise
      .then(()=>{
        console.log('user has been assigned');
      });
    }
  };
}
