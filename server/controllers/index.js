var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      console.log("About to respond to Get");
      models.messages.get(function(results) {

        res.json({results: results});
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      var username = req.body.username;
      var text = req.body.text;
      var roomname = req.body.roomname;

      //check if user exists, if not, create one
      models.users.get(req.body.username, function(users) {
        if (!users.length) {
          console.log("new user created");
          models.users.post(req.body.username);
        }
      });

      var params = [text, username, roomname];
      models.messages.post(params, function(results) {
        console.log(results);
        res.json(results);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
    }
  }
};

