angular
.module('storeApp')
.controller('ItemsIndexCtrl', ItemsIndexCtrl);

ItemsIndexCtrl.$inject = ['Item', 'CurrentUserService', 'API', '$http', '$rootScope', 'Request'];

function ItemsIndexCtrl(Item, CurrentUserService, API, $http, $rootScope, Request){
  const vm       = this;
  // vm.offers      = CurrentUserService.currentUser.sent_requests;

  //populating the offers tab
  // vm.offers = CurrentUserService.currentUser.sent_requests.filter(request => {} );

  // User
  //   .get({ id: TokenService.decodeToken().id })
  //   .$promise
  //   .then(user => {
  //     console.log('user:', user);
  //     vm.user = user;
  //     vm.offers = user.sent_requests;
  //   });

  vm.updateOffer = updateOffer;

  vm.pendingRequests = CurrentUserService.currentUser.received_requests.filter(request => {
    if (request.status === 'pending') return request;
  });

  Item
    .query()
    .$promise
    .then(items => {
      vm.filteredItems = items.filter(item => {
        if (item.seller.id !== CurrentUserService.currentUser.id && item.requests.find(request => request.status === 'accepted') === undefined) return item;
      });
    });

  function updateOffer(request, action) {
    request.status = action;
    console.log(request);

    Request
    .update({ id: request.id}, request)
    .$promise
    .then(()=>{
      const index = vm.pendingRequests.indexOf(request);
      vm.pendingRequests.splice(index, 1);
      console.log('Request has been successfully updated');
    });
  }
}
