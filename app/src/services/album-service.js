albumService.$inject = ['$http', 'apiUrl'];

export default function albumService($http, apiUrl){

  return {
    get(){
      return $http
      .get(apiUrl)
      .then( result => result.data);
    },
    add(data){
      return $http
      .post(apiUrl, data)
      .then( result => result.data);
    },
    remove(id){
      const deleteUrl = apiUrl + '/' + id;
      return $http
      .delete(deleteUrl)
      .then( result => result.data);
    }
  };
}
