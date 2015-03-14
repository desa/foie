var redis = require('redis');
var client = redis.createClient();

// Specific instance of the save function for a user
var save = function(cb) {
  var type = this.type;
  var self = this;
  if (!this.id) {
    client.incr('user:id', function(err, result) {
      if (err) throw err;
      console.log("RETURNED ID", result);
      self.id = result;
      self.save(cb);
    });
  } else {
    console.log("THIS.ID",this.id);
    var userKey = 'user:' + this.id;
    var userHash = {name: this.name, email: this.email};
    client.hmset(userKey, userHash, cb);
  }
};

//Required Class methods to Implement
var create = function() { console.log('created'); };
var read = function() { console.log('read'); };
var update = function() { console.log('update'); };
var destroy = function() { console.log('destroy'); };
//Extra query method
var query = function() { console.log('query'); };

//Constructor for user in example
function User(name,email) {
  this.name = name;
  this.email = email;
  this.types = 'user';
};

User.prototype.save = save;

var mike = new User("Mike", "mjd@ga.co");

//save the user, once saved make request to see that its there
mike.save(function(err, reply) {
  if (err) throw err;
  console.log("REPLY",reply);
  client.get('user:id', function(err, id) {
    if (err) throw err;
    console.log("ID", id);
    client.hgetall('user:'+id, function(err, user) {
      if (err) throw err;
      console.log("USER", user);
    });
  });
});

