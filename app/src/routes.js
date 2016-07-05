configRoutes.$inject = [ '$stateProvider', '$urlRouterProvider' ];

export default function configRoutes( $stateProvider, $urlRouterProvider) {

  $stateProvider
    .state( 'home', {
      url: '/',
      views: {
        main: {
          template: '<p>Welcome. Here you will find photos of adorable animals.</p>'
        }
      }
    })
    .state( 'animals', {
      url: '/animal',
      views: {
        main: {
          component: 'albumPicker'
        }
      }
    })
    .state( 'album', {
      url: '/album/:albumId',
      resolve: {
        animal: [ '$stateParams', ( params ) => params.albumId ],
      },
      views: {
        pics:{
          component: 'album'
        }
      }
    });
  $urlRouterProvider.otherwise('/');

}
