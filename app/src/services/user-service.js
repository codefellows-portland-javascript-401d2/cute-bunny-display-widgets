userService.$inject = ['tokenService', '$http', 'apiUrl'];

export default function userService(tokenService, $http, apiUrl){

  // convenience that removes token at initial load if it's invalid
  // const current = tokenService.get();
  // if (current){
  //   $http.get(`${apiUrl}/verify`)
  //    .catch( () => tokenService.remove());
  // }

  return {
    isAuthenticated(){
      return !!tokenService.get();
    },
    logout(){
      tokenService.remove();
    },
    signin(credentials){
      return $http.post(`${apiUrl}/signin`, credentials)
        .then(result => {
          tokenService.set(result.data.token);
        })
        .catch( err => {
          throw err.data;
        });

    },
    signup(credentials){
      return $http.post(`${apiUrl}/signup`, credentials)
        .then(result => {
          tokenService.set(result.data);
        })
        .catch( err => {
          throw err.data;
        });
    }
  };


}
