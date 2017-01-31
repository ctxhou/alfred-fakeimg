import test from 'ava';
import alfyTest from 'alfy-test';

test('result', async t => {
	const alfy = alfyTest();
	const input = 300;
	const result = await alfy(input);

	t.deepEqual(result, [
		{
	    title: 'Fake Image',
	    subtitle: `http://fakeimg.pl/${input}`,
	    arg: `http://fakeimg.pl/${input}`
		},
		{
			title: 'Fake Image with Color',
	    subtitle: `http://fakeimg.pl/${input}/ff0000`,
	    arg: `http://fakeimg.pl/${input}/ff0000`
		},
		{
			title: 'Fake Image with Text',
			subtitle: `http://fakeimg.pl/${input}/?text=World`,
			arg: `http://fakeimg.pl/${input}/?text=World`
		},
		{
			title: 'Fake Image with Text and Color',
			subtitle: `http://fakeimg.pl/${input}/ff0000/?text=World`,
			arg: `http://fakeimg.pl/${input}/ff0000/?text=World`
		}
	]);
});
