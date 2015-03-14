var redis = require('redis');
var client = redis.createClient();

console.log(client);
//Playing around
client.set('user', 1, redis.print);

client.get('user', function(err,result) {
  console.log(result);
});
