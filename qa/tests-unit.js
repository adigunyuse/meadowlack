var fortune = require('../libs/fortunes.js');

var expect = require('chai').expect;

suite('Fortune cookie tests', function(){

test('fortun() should return a fortune', function(){

			expect(typeof fortune.fortun() === 'string');

		});
});