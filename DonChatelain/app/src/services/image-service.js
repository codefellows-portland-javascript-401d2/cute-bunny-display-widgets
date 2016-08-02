imageService.$inject = ['$http', 'apiUrl'];

export default function imageService($http, apiUrl) {
  return {
    get() {
      return $http.get(`${apiUrl}/images`)
        .then(list => list.data.content);
    },
    getByAlbum(albumId) {
      return $http.get(`${apiUrl}/albums/${albumId}`)
        .then(list => list.data.content);
    },
    post(image) {
      return $http.post(`${apiUrl}/images`, image)
        .then(result => result.data.content);
    },
    del(imageId) {
      return $http.delete(`${apiUrl}/images/${imageId}`)
        .then(result => result.data.content);
    }
  };
};