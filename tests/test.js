var test = require('tape');

var vimhelpjp = require('../src/vimhelpjp');

var data1 = JSON.stringify({
	vimdoc_url: 'http://vim-jp.org/vimdoc-ja/cmdline.html#c_%3CC-R%3E_%3CC-W%3E',
	text: 'hogehoge'
});

var data2 = JSON.stringify({
	vimdoc_url: '',
	text: ''
});

test('vimhelpjp test', function (t) {
	t.plan(2);

	t.deepEqual(vimhelpjp(data1), [
		'vimhelpjp response: ',
		'hogehoge',
		'http://vim-jp.org/vimdoc-ja/cmdline.html#c_%3CC-R%3E_%3CC-W%3E'
	].join('\n'));

	t.equal(vimhelpjp(data2), 'vimhelpjp response: Not Found.');
});
