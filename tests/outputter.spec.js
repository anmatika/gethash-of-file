const chai = require('chai');
const sinon = require('sinon');
const assert = chai.assert;
const outputter = require('../outputter');

describe('outputter sha1', ()=> {
    const consoleSpy = sinon.spy(console, 'log');
    it('console log is called', (done) => {
        outputter.sha1('./tests/testfile.txt');
        assert.isTrue(consoleSpy.called);
        done();
    });
});
