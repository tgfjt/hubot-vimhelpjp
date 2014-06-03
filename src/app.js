// Description:
//   ':help' for vimhelp
//
// Dependencies:
//    "request": "^2.36.0"
//
// Configuration:
//   None
//
// Commands:
//   :vimhelp <keyword> - to run :help for vimhelpjp
var request = require('request');

var vimhelpjp = require('./vimhelpjp');

var url = 'http://vim-help-jp.herokuapp.com/api/search/json/';

module.exports = function(robot) {
	robot.hear(/:vimhelp (.*)/i, function(msg) {
		request({url: url, qs: {query: msg.match[1]}}, function(err, res, body) {
			if (!err && res.statusCode === 200) {
				msg.send(vimhelpjp(body));
			} else if (err) {
				console.log(err);
			}
		});
	});
};
