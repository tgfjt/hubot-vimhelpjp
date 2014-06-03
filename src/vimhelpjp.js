var vimhelpjp = function(body) {
	'use strict';

	var text = JSON.parse(body).text;

	if (text === '') {
		return 'vimhelpjp response: Not Found.';
	}

	return [
		'vimhelpjp response: ',
		text,
		JSON.parse(body).vimdoc_url
	].join('\n');
};

module.exports = vimhelpjp;
