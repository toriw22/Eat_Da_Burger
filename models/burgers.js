var orm = require("../config/orm.js");

var burgers = {
	selectAll: function(callback) {
		orm.all("burgers", function(res) {
			callback(res);
		});
	},

	insertOne: function(cols, vals, callback) {
		orm.create("burgers", cols, vals, function(res) {
			callback(res);
		});
	},

	updateOne: function(objColVals, condition, callback) {
		orm.update("burgers" objColVals, condition, function(res) {
			callback(res);
		});
	}
};

module.exports = burgers;
