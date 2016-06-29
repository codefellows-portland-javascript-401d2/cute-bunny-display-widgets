imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/monsters`)
        .then(list => list.data.content);
    },
    post(image) {
      return $http.post(`${apiUrl}/monsters`, image)
        .then(result => result.data.content);
    },
    del(imageId) {
      return $http.delete(`${apiUrl}/monsters/${imageId}`)
        .then(result => result.data.content);
    }
  };
};