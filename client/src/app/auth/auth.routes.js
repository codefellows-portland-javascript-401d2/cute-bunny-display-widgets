export default [
  {
    name: 'signin',
    config: {
      url: '/signin',
      data: {
        requireAuth: false
      },
      views: {
        header: {
          component: 'headerDefault'
        },
        main: {
          component: 'signin'
        }
      }
    }
  },
  {
    name: 'signout',
    config: {
      url: '/signout',
      data: {
        requireAuth: false
      },
      views: {
        header: {
          component: 'headerDefault'
        },
        main: {
          component: 'signout'
        }
      }
    }
  },
  {
    name: 'signup',
    config: {
      url: '/signup',
      data: {
        requireAuth: false
      },
      views: {
        header: {
          component: 'headerDefault'
        },
        main: {
          component: 'signup'
        }
      }
    }
  }
];
