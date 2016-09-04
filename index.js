'use strict';
const execa = require('execa');
const camelcaseKeys = require('camelcase-keys');
const linuxBatteries = require('linux-batteries');

module.exports = () => {
	if (process.platform !== 'linux') {
		return Promise.reject(new Error('Only Linux systems are supported'));
	}

	return linuxBatteries().then(batteries => Promise.all(batteries.map(x => {
		const args = ['-i', `/org/freedesktop/UPower/devices/${x}`];
		const obj = {};

		return execa.stdout('upower', args).then(stdout => {
			stdout = stdout.trim().split('\n').forEach(x => {
				if (x.trim() === 'battery') {
					return;
				}

				x = x.split(/:\s+(?=[\w\d'])/);
				obj[x[0].trim()] = x[1];
			});

			return camelcaseKeys(obj);
		});
	})));
};
