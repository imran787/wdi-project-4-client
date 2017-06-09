angular
.module('storeApp')
.factory('Request', Request);

Request.$inject = ['API', '$resource'];
function Request(API, $resource){
  return $resource(`${API}/requests`, { id: '@_id'}, {
    save: { method: 'POST', url: `${API}/requests` },
    confirmedRequest: { method: 'PUT', url: `${API}/requests/:id` }

  });
}
