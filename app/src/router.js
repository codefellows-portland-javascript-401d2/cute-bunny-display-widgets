configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function configRoutes($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('landing', {
      url: '/',
      views: {
        main: {
          template: '<p>Welcome User</p>'
        }
      }
    })
    .state('gallery', {
      url: '/gallery',
      views: {
        main: {
          component: 'toggler'
        }
      }
    })
    .state('newPost', {
      url: '/newpost',
      views: {
        main: {
          component: 'newPost'
        }
      }
    })

  $urlRouterProvider.otherwise( '/' );

};