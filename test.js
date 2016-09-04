import test from 'ava';
import m from './';

test(async t => {
	const batteries = await m();

	t.truthy(batteries.length);
	t.truthy(batteries[0].nativePath);
});
