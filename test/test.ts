/// <reference path='../typings/node/node.d.ts' />
/// <reference path='../typings/mocha/mocha.d.ts' />

import assert = require("assert");
import {Calculator} from '../src/Calculator';

describe('Calculator', () => {
  it('should add', () => {
    assert.equal(Calculator.add(2, 2), 4);
  });
});
