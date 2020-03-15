const expect = require('chai').expect;
const subject = require('../mocha-done-issue.js');

it('problematic test', (done) => {
  subject.handler((e, d) => {
    done();
    expect(true).to.be.false;
  });
});