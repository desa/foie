var foie = require('../src/foie');

//Javascript Land
function User(name) {
  this.name = name;
  this.email = name;
  this.password = name;
};

foie(User);

module.exports.User = User;

var user = new User("Mike");
user.getName();
console.log("USER TYPES", User.types);
