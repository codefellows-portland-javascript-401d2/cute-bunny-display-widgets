export default [
  {
    name: 'photo-list',
    config: {
  		url: '/photos',
      resolve: {
				photos: [
          'photosService',
          photosService => photosService.retrievePhotos()
        ]
			},
  		views: {
        header: {
          component: 'headerDefault'
        },
  			main: {
  				component: 'photoList'
  			}
  	  }
    }
	},
  {
    name: 'photo-detail',
    config: {
  		url: '/photos/:photoId',
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
