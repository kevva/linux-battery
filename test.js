import test from 'ava';
import fn from './';

test(async t => {
	const batteries = await fn();

	t.truthy(batteries.length);
	t.truthy(batteries[0].nativePath);
});
