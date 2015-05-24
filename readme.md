# linux-battery [![Build Status](https://travis-ci.org/kevva/linux-battery.svg?branch=master)](https://travis-ci.org/kevva/linux-battery)

> Get info about your battery in Linux


## Install

```
$ npm install --save linux-battery
```


## Usage

```js
var linuxBattery = require('linux-battery');

linuxBattery(function (err, battery) {
	console.log(battery);
	/*
	{
		'native-path': 'BAT0',
		vendor: 'innotek',
		model: '1',
		serial: '0',
		'power supply': 'yes',
		...
	}
	*/
});
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
