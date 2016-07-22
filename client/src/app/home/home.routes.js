export default [
  {
    name: 'home',
    config: {
      url: '/',
      data: {
        requireAuth: false
      },
      views: {
        header: {
          component: 'headerDefault'
        },
        main: {
          component: 'home'
        }
      }
    }
  }
];
