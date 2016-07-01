animalService.$inject = ['$http', 'apiUrl'];

export default function animalService($http, apiUrl){

  const albumUrl = apiUrl + '/albums';

  return {
    get(){
      return $http
      .get(albumUrl)
      .then( result => result.data);
    },
    add(data){
      return $http
      .post(albumUrl, data)
      .then( result => result.data);
    },
    remove(id){
      const deleteUrl = albumUrl + '/' + id;
      return $http
      .delete(deleteUrl)
      .then( result => result.data);
    }
  };
}
