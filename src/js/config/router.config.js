angular
.module('storeApp')
.config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function Router($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl as register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl as login'
  })
  .state('usersShow', {
    url: '/users/:id',
    templateUrl: '/js/views/users/show.html',
    controller: 'UsersShowCtrl as vm'
  })
  .state('itemsIndex', {
    url: '/items',
    templateUrl: '/js/views/items/index.html',
    controller: 'ItemsIndexCtrl as vm'
  })
  .state('itemsShow', {
    url: '/items/:id',
    templateUrl: '/js/views/items/show.html',
    controller: 'ItemsShowCtrl as vm'
  })
  .state('itemsNew', {
    url: '/items/new',
    templateUrl: '/js/views/items/new.html',
    controller: 'ItemsNewCtrl as vm'
  })
  .state('itemsEdit', {
    url: '/items/:id/edit',
    templateUrl: '/js/views/items/edit.html',
    controller: 'ItemsEditCtrl as vm'
  });

  $urlRouterProvider.otherwise('/');

}
