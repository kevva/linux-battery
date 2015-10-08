'use strict';
var test = require('ava');
var linuxBattery = require('./');

if (!process.env.CI) {
	test(function (t) {
		t.plan(2);

		linuxBattery().then(function (battery) {
			t.assert(battery.length, battery);
			t.assert(battery[0].nativePath, battery[0].nativePath);
		});
	});
}
