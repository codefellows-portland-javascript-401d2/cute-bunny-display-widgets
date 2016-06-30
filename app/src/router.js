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
      url: '/addimage',
      views: {
        main: {
          component: 'newPost'
        }
      }
    })
    .state('albums', {
      url: '/albums',
      views: {
        main: {
          component: 'albumControl'
        }
      }
    });

  $urlRouterProvider.otherwise( '/' );

};