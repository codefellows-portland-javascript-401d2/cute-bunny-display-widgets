albumService.$inject = ['$http', 'apiUrl'];

export default function albumService($http, apiUrl){

  return {
    get(){
      return $http
      .get(apiUrl)
      .then( result => result.data);
    },
    post(){


    }

  };

}
