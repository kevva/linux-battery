'use strict';
var test = require('ava');
var linuxBattery = require('./');

if (!process.env.CI) {
	test(function (t) {
		t.plan(3);

		linuxBattery(function (err, battery) {
			t.assert(!err, err);
			t.assert(battery.length, battery);
			t.assert(battery[0].nativePath, battery[0].nativePath);
		});
	});
}
