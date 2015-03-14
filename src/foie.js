var fs = require('fs');
var path = require('path'); // NOTE: I added this module to resolve fs paths more easily
var _ = require('underscore');
var async = require('async');

// HERE'S YOUR BETTER WAY TO REQUIRE MODELS AUTOMATICALLY
// Note: might be good, eventually, to set the location of the models to an env var,
// would be nice to get rid of the hardcoded paths.

var models = []; // initialize the array
fs
  .readdirSync(path.resolve(__dirname, "../tests/examples/models"))
  .forEach(function(file) {
    models.push(require("../tests/examples/models/" + file));
  });

// console.log(models); // Not necessary unless you want to see the results of this code


//FOIE Land
function foie(_class) {
  var _classProto = _class.prototype;
  var context = new _class();
  var types = _.filter(models, function (model) {
    return _.reduce(model, function(memo, value, index) {
      var objectHasProperty = (index === "class" ? true : context.hasOwnProperty(index));
      return memo && objectHasProperty;
    }, true);
  });
  _class.types = _.map(types, function(type) { return type.class; });
  _classProto.getName = function() { console.log(this.name) };
  return _class;
};

module.exports = foie;
