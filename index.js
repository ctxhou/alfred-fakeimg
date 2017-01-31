'use strict';
const alfy = require('alfy');

const input = alfy.input;

alfy.output([
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
