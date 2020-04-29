const mergeMeetings = (meetings) => {

  let sortedMeetings = meetings.sort((a,b) => a.st - b.st)
  let mergedMeetings = [sortedMeetings[0]];
  //Go through meetings compare each w/ last merged
  for(let i = 1; i < sortedMeetings.length; i++) {
    //if the end time of meeting 2 is less than or equal to end time of meeting 1, merge
    let lastMerged = mergedMeetings[mergedMeetings.length - 1]
    let currMeeting= sortedMeetings[i]
    if(currMeeting.st <= lastMerged.end) {
      lastMerged.end = Math.max(lastMerged.end, currMeeting.end)
    } else mergedMeetings.push(currMeeting)
  }
  return mergedMeetings;
}

module.exports = mergeMeetings

