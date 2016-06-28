imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/monsters`)
        .then(list => JSON.parse(list.data.content));
    }
  };
};