const { expect } = require('chai');
const mergeMeetings = require('./mergeMeetingTimes');

describe('mergeMeeting', () => {
  it('It merges two ordered meetings', () => {
    expect(mergeMeetings([{st:1, end:3}, {st:2, end: 8}])).to.eql([{st: 1, end: 8}])
  }),
  it('merges more than two ordered meetings', () => {
    expect(mergeMeetings([{st:1, end:3}, {st:2, end: 8}, {st: 6, end: 7}, {st: 10, end: 12}])).to.eql([
    {st:1, end: 8}, {st:10, end: 12}])
  })
})
