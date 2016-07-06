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
      url: '/album/?albumId?display?picId',
      resolve: {
        animal: [ '$stateParams', ( params ) => params.albumId || '577576fd2cf646f53a23a7e0' ],
        display: [ '$stateParams', ( params ) => params.display || 'thumb' ],
        picId: [ '$stateParams', ( params ) => params.picId ]
      },
      views: {
        pics:{
          component: 'album'
        }
      }
    });

  $urlRouterProvider.otherwise('/');

}
