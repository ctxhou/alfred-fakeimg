import test from 'ava';
import alfyTest from 'alfy-test';

test('result', async t => {
	const alfy = alfyTest();
	const input = 300;
	const result = await alfy(input);

	t.deepEqual(result, [
		{
	    title: 'Fake Image',
	    link: `http://fakeimg.pl/${input}`
		},
		{
			title: 'Fake Image with Color',
	    link: `http://fakeimg.pl/${input}/ff0000`
		},
		{
			title: 'Fake Image with Text',
			link: `http://fakeimg.pl/${input}/?text=World`
		},
		{
			title: 'Fake Image with Text and Color',
			link: `http://fakeimg.pl/${input}/ff0000/?text=World`
		}
	]);
});
