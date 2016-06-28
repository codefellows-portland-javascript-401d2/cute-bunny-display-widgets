imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/monsters`)
        .then(list => list.data.content);
    },
    post(item) {
      return $http.post(`${apiUrl}/monsters`, item)
        .then(result => result.data.content);
    }
  };
};