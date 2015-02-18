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
```

```js
foie.js

```
