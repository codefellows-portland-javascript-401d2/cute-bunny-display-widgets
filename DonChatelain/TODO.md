## ROUTING

state should tell components what to do.
state should possibly use image and album services

## Endpoints
```

Promise.all([
  List.findById(id),
  Item.find({list: id})
])
.then(([list, items]) => {
   // do stuff
})

```

## Auth

Service auth-interceptor
  inject $window and $q

app/app.js -> app.config(routes); check!
              app.config(http) <-<-<

      also

          app.run( auth );  initializes

new file config-http.js  // rename?
    inject $httpProvider

    export default function configHttp(httpProvider) => {
      $httpProvider.interceptors.push(interceptor);

      interceptor.$inject = [$window]

      function interceptor($window) {
        return {
          request( config) {

          },
          response(config) {

          }
        };
      }
    }

