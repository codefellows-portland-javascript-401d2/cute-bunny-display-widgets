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