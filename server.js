var express = require('express');
var app = express();
var path = require('path');

/*var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://TrinityCoyle:1999Zirconia!@cluster0-shard-00-00-sx3i1.mongodb.net:27017,cluster0-shard-00-01-sx3i1.mongodb.net:27017,cluster0-shard-00-02-sx3i1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
MongoClient.connect(uri, function(err, db) {
  db.close();
});*/

//app.use(forceSSL());

app.use(express.static(__dirname + '/dist'));

/*app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});*/

/*var forceSSL = function() {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
       ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
}*/

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});