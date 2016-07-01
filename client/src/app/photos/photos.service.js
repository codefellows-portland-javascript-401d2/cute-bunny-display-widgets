photosService.$inject = ['$http', 'apiUrl'];

export default function photosService($http, apiUrl) {
  return {
    createPhoto(photo) {
      return $http
        .post(`${apiUrl}/photos`, photo)
        .then(result => result.data);
    },
    deletePhoto(photoId) {
      return $http
        .delete(`${apiUrl}/photos/${photoId}`)
        .then(result => result.data);
    },
    readPhoto(photoId) {
      return $http
        .get(`${apiUrl}/photos/${photoId}`)
        .then(result => result.data);
    },
    readPhotos() {
      return $http
        .get(`${apiUrl}/photos`)
        .then(result => result.data);
    },
    updatePhoto(photoId, photo) {
      return $http
        .put(`${apiUrl}/photos/${photoId}`, photo)
        .then(result => result.data);
    }
  }
};
