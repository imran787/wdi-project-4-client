angular
.module('storeApp')
.factory('Request', Request);

Request.$inject = ['API', '$resource'];
function Request(API, $resource){
  return $resource(`${API}/requests/:id`, { id: '@_id'}, {
    save: { method: 'POST', url: `${API}/requests` },
    update: { method: 'PUT' }
  });
}
