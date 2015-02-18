var fs = require('fs');
var _ = require('underscore');
var async = require('async');

//DB Land
var UserModel = {class: "User",
  name: {type: "String"},
  email: {type: "String"},
  password: {type: "String"}
};

var NameModel = {class: "Name",
  name: {type: "String"}
};

var LameModel = {class: "Lame",
  lame: {type: "String"}
};
var models = [UserModel,NameModel, LameModel];

//Javascript Land
function User(name) {
  this.name = name;
  this.email = name;
  this.password = name;
};

foie(User);

//FOIE Land
function foie(obj) {
  //var ctxProto = context.constructor.prototype;
  var objProto = obj.prototype;
  var context = new obj();
  var types = _.filter(models, function (model) {
    return _.reduce(model, function(memo, value, index) {
      var objectHasProperty = (index === "class" ? true : context.hasOwnProperty(index));
      return memo && objectHasProperty;
    }, true);
  });

  console.log(types);
  obj.types = _.map(types, function(type) { return type.class; });
  objProto.getName = function() { console.log(this.name) };
  return obj;
};

module.exports.User = User;

var user = new User("Mike");
user.getName();
console.log(User.types);
