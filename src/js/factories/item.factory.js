angular
.module('storeApp')
.factory('Item', Item);

Item.$inject = ['$resource', 'API'];
function Item($resource, API){
  return $resource(`${API}/items/:id`,
    { id: '@_id'},
    {
      'update': { method: 'PUT'}
    });
}
