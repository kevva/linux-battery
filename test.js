'use strict';
var test = require('ava');
var linuxBattery = require('./');

if (!process.env.CI) {
	test(function (t) {
		t.plan(2);

		linuxBattery(function (err, battery) {
			t.assert(!err, err);
			t.assert(battery, battery);
		});
	});
}
