import template from './app.html';

export default {
  template,
  controllerAs: 'app',

  controller: function($http) {
    $http.get('http://localhost:3000/api/monsters')
      .then(results => {
        if (results.status === 200) {
          this.images = JSON.parse(results.data.content);
        } else {
          console.error('500: Problem Retrieving Images');
        }
      });
  }
};