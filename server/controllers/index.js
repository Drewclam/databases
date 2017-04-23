// AKA EVENT LISTENERS/METHODS?
var models = require('../models');

var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

module.exports = {
  messages: {

    get: function (req, res) {
      // a function which handles a get request for all messages
      models.messages.get(req.body, res);
    },

    post: function (req, res) {
      // a function which handles posting a message to the database
      models.messages.post(req.body, res);
    }
  },

  users: {
    get: function (req, res) {
      // we in here when someone pings our server with a get request with url: ip/classes/users/
      // we are passed the request and response object from the ping to the server
      // can handle collecting chunks and combining them into a json object
      // pass this stuff into our model which interacts with the SQL database
      // maybe pass our parsed data and the response object to the model methods?
        // don't need the request object anymore
      // give the model the relevant data and the response object so it can end the request
      models.users.get(req.body, res);
    },
    post: function (req, res) {
      models.users.post(req.body, res);
    }
  }
};

