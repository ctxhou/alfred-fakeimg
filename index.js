'use strict';
const alfy = require('alfy');

const input = alfy.input;

alfy.output([
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
	]
);
