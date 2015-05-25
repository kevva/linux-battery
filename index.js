'use strict';
var camelcaseKeys = require('camelcase-keys');
var execFile = require('child_process').execFile;

module.exports = function (cb) {
	if (process.platform !== 'linux') {
		throw new Error('Only Linux systems are supported');
	}

	var cmd = 'upower';
	var args = ['-i', '/org/freedesktop/UPower/devices/battery_BAT0'];
	var ret = {};

	execFile(cmd, args, function (err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		stdout = stdout.trim().split('\n').forEach(function (el) {
			if (el.trim() === 'battery') {
				return;
			}

			el = el.split(/:\s+(?=[\w\d\'])/);
			ret[el[0].trim()] = el[1];
		});

		cb(null, camelcaseKeys(ret));
	});
};
