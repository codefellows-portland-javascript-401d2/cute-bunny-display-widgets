export default [
  {
    name: 'photo-detail',
    config: {
      url: '/photos/:photoId',
      data: {
        requireAuth: true
      },
      resolve: {
        photo: [
          'photosService',
          '$stateParams',
          (photosService, params) => photosService.retrievePhoto(params.photoId)
        ]
      },
      views: {
        header: {
          component: 'headerDefault'
        },
        main: {
          component: 'photoDetail'
        }
      }
    }
  }
];
