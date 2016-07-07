photosService.$inject = ['$http', 'apiUrl'];

export default function photosService($http, apiUrl) {
  return {
    createPhoto(photo) {
      return $http
        .post(`${apiUrl}/photos`, photo)
        .then(res => res.data.result);
    },
    deletePhoto(photoId) {
      return $http
        .delete(`${apiUrl}/photos/${photoId}`)
        .then(res => res.data.result);
    },
    retrievePhoto(photoId) {
      return $http
        .get(`${apiUrl}/photos/${photoId}`)
        .then(res => res.data.result);
    },
    retrievePhotos() {
      return $http
        .get(url)
        .then(res => res.data.result);
    },
    updatePhoto(photoId, photo) {
      return $http
        .put(`${apiUrl}/photos/${photoId}`, photo)
        .then(res => res.data.result);
    }
  }
};
