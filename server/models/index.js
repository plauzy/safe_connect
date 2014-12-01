var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      var queryString = "select users.username, messages.id, messages.text, messages.roomname from messages \
                         join users on messages.userid = users.id \
                         order by messages.id desc;";

      db.query(queryString, function(err, rows) {
        if (err) {console.log(err)}
        callback(rows);
      });
    }, // a function which produces all the messages
    post: function (params, callback) {
      var queryString = "insert into messages (text, userid, roomname) \
                         values (?, (select id from users where username = ? limit 1), ?);";
      db.query(queryString, params, function(err, rows) {
        callback(rows);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (username, callback) {
      var userQuery = "select id from users where username = ?;";
      User.findAll({ where: {username: username} }).success(function(users) {
        callback(users);
      });

      // db.query(userQuery, params, function(err, rows) {
      //   if (err) console.log(err);
      //   callback(rows);
      // });
    },
    post: function (username) {
      var queryString = "insert into users (username) values (?);";
      User.create({username : username});
      // db.query(queryString, params, function(err, results) {
      //   if (err) console.log(err);
      // });
    }
  }
};

