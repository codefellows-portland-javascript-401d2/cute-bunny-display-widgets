export default [
  {
    name: 'album-list',
    config: {
  		url: '/albums',
      resolve: {
				albums: [
          'albumsService',
          albumsService => albumsService.retrieveAlbums()
        ]
			},
  		views: {
        header: {
          component: 'headerDefault'
        },
  			main: {
  				component: 'albumList'
  			},
        addAlbum: {
          component: 'addAlbum'
        }
  	  }
    }
	},
  {
    name: 'album-detail',
    config: {
  		url: '/albums/:albumId',
      resolve: {
				data: [
          'albumsService',
          '$stateParams',
          (albumsService, params) => albumsService.retrieveAlbum(params.albumId)
        ]
			},
  		views: {
        header: {
          component: 'headerDefault'
        },
  			main: {
  				component: 'albumDetail'
  			}
  	  }
    }
	}
];
