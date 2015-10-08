# linux-battery [![Build Status](https://travis-ci.org/kevva/linux-battery.svg?branch=master)](https://travis-ci.org/kevva/linux-battery)

> Get info about your battery in Linux


## Install

```
$ npm install --save linux-battery
```


## Usage

```js
const linuxBattery = require('linux-battery');

linuxBattery().then(battery => {
	console.log(battery);
	/*
	[{
		nativePath: 'BAT0',
		vendor: 'innotek',
		model: '1',
		serial: '0',
		powerSupply: 'yes',
		...
	}]
	*/
});
```


## Related

* [battery-level](https://github.com/gillstrom/battery-level) - Get current battery level


## License

MIT © [Kevin Martensson](http://github.com/kevva)
