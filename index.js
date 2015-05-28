'use strict';
var execFile = require('child_process').execFile;
var camelcaseKeys = require('camelcase-keys');
var eachAsync = require('each-async');
var linuxBatteries = require('linux-batteries');

module.exports = function (cb) {
	var cmd = 'upower';
	var ret = [];

	if (process.platform !== 'linux') {
		throw new Error('Only Linux systems are supported');
	}

	linuxBatteries(function (err, batteries) {
		if (err) {
			cb(err);
			return;
		}

		eachAsync(batteries, function (battery, i, next) {
			var args = ['-i', '/org/freedesktop/UPower/devices/' + battery];
			var obj = {};

			execFile(cmd, args, function (err, stdout) {
				if (err) {
					next(err);
					return;
				}

				stdout = stdout.trim().split('\n').forEach(function (el) {
					if (el.trim() === 'battery') {
						return;
					}

					el = el.split(/:\s+(?=[\w\d\'])/);
					obj[el[0].trim()] = el[1];
				});

				ret.push(camelcaseKeys(obj));
				next();
			});
		}, function (err) {
			if (err) {
				cb(err);
				return;
			}

			cb(null, ret);
		});
	})
};
