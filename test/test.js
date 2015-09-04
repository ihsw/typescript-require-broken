/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/mocha/mocha.d.ts' />
var assert = require("assert");
var Calculator_1 = require('../src/Calculator');
describe('Calculator', function () {
    it('should add', function () {
        assert.equal(Calculator_1.Calculator.add(2, 2), 4);
    });
});
