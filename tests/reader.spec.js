const chai = require('chai');
const assert = chai.assert;
const index = require('../reader');

describe('getHashOfFile', ()=> {
    it('log out the correct sha1', (done) => {
        index.getHashOfFile('sha1', './tests/testfile.txt')
            .then(r => {
                assert.equal('83b8006f7f5de8c32a49fbd6fd846b760ee4dc5d', r);
                done();
            });
    });
    it('log out the correct sha256', (done) => {
        index.getHashOfFile('sha256', './tests/testfile.txt')
            .then(r => {
                assert.equal('a85146ff1e0d1a48889a52fe6b5a03732ce0d1d68e78ee0065d4a43310f338a9', r);
                done();
            });
    });
    it('log out the correct md5', (done) => {
        index.getHashOfFile('md5', './tests/testfile.txt')
            .then(r => {
                assert.equal('f22cbfc264f4c52ca8d3ad168b36b1fb', r);
                done();
            });
    });
});
