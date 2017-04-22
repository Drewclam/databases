// THIS IS MESSAGES AND USERS MODELS
var db = require('../db');
// Models will interact with SQL database
// we should be getting passed either the actual message object
  // eg. {user: 'vikki', room: 'lobby', message: 'hi'}
// or getting passed stringified JSON --> probably worse?
  // eg. '{samethingbutallinastring}'
// GET/POST requests will query the SQL database and SELECT/INSERT information
  // this is done through creating a connection to SQL
  // ask the connection to SELECT/INSERT relevant data
  // eg. SQLconnection.query(THE_SQL_COMMAND, OBJ, CB(err, result));
// we wouldn't need to touch the primary keys when inserting because they increment automatically
// when we are done interacting with SQL we can access the response object to send our response back to the server
  // for GET the response should give them the data they asked for
  // for POST the response should echo back the data they want to INSERT
// haven't hooked up chatterbox server to app.js yet
  // once db/index.js creates a connection to SQL
  // hook up app.js to db/index.js
  // tell chatterbox server to send stuff to ourselves (localhost ip) at this port
  // chatterbox client would query the server which pulls from MYSQL

module.exports = {
  messages: {
    get: function () {
      res.writeHead(201, headers);
      res.end(JSON.stringify(results));
    }, // a function which produces all the messages
    post: function () {
      var stream = '';
      req.on('data', (chunk) => {
        console.log('INSIDE ON DATA EVENT ', chunk);
        stream += chunk;
      });

      req.on('end', () => {
        var results = [];
        stream = JSON.parse(stream);
        console.log(stream);
        results.push({stream});
        res.writeHead(201, headers);
        res.end(JSON.stringify(results));
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      res.writeHead(201, headers);
      res.end(JSON.stringify(results));
    },
    post: function (req, res) {
      var stream = '';
      req.on('data', (chunk) => {
        console.log('INSIDE ON DATA EVENT ', chunk);
        stream += chunk;
      });

      req.on('end', () => {
        var results = [];
        stream = JSON.parse(stream);
        console.log(stream);
        results.push({stream});
        res.writeHead(201, headers);
        res.end(JSON.stringify(results));
      });
    }
  }
}

