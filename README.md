foie
====

Duck-type-like ORM for javascript.

You write regular javascript objects, and foie them.

```js
var require('foie');

function User() {

  ...

};

foie(User);
```
We attach methods for saving the object.

```js
var mike = new User();

mike.save();
mike.query("SELECT * FROM USER");
```

```js
foie.js

```

##Ideas
* `models/model_nameModel.js` file defines template for stored object, specifies what attributes and methods that must be implemented inorder to be saved.
* no migrations, instead of having a migration, each time an object is `foie`'ed we diff the object with the version that was last foied and create migration appropriately.
