import test from 'ava';
import fn from './';

test(async t => {
	const batteries = await fn();

	t.ok(batteries.length);
	t.ok(batteries[0].nativePath);
});
