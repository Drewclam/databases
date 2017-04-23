// THIS IS MESSAGES AND USERS MODELS
var db = require('../db');
var mysql = require('mysql');
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

var queryStrings = {
  messages: {
    get: 'SELECT * from messages',
    post: 'INSERT INTO messages(text, userId, roomId) VALUES \
    (?, (select id from users where users.name = ?), (select id from rooms where rooms.name = ?))',
    createRoom: 'INSERT INTO rooms(name) VALUES(?)'
  },
  users: {
    get: 'SELECT * FROM users',
    post: 'INSERT INTO users(name) VALUES(?)'
  }
};

var sqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

module.exports = {
  messages: {
    get: function (body, res) {
      sqlConnection.query(queryStrings.messages.get, (err, result) => {
        if (err) {
          throw err;
        }
        res.end(result);
      });
    },
    post: function (body, res) {
      sqlConnection.query(queryStrings.messages.createRoom, body.roomname, (err, result) => {
        if (err) {
          throw err;
        }
        var posted = sqlConnection.query(queryStrings.messages.post, [body.message, body.username, body.roomname], (err, result) => {
          if (err) {
            throw err;
          }
          console.log(posted.values);
          res.end(posted.values[0]);
        });
      });
    }
  },
  users: {
    // Ditto as above.
    get: function (body, res) {
      sqlConnection.query(queryStrings.users.get, (err, result) => {
        if (err) {
          throw err;
        }
        res.end(result);
      });
    },
    post: function (body, res) {
      sqlConnection.query(queryStrings.users.post, body.username, (err, result) => {
        if (err) {
          throw err;
        }
        res.end('helolo');
      });
    }
  }
}

