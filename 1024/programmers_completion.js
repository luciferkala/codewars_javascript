function solution(participant, completion) {
  var answer = "";
  let part = participant.slice();
  let comp = completion.slice();

  for (var i in part) {
    if (comp.includes(part[i]) === true) {
      let index = comp.indexOf(part[i]);
      comp.splice(index, 1);
    } else {
      answer = part[i];
      break;
    }
  }
  return answer;
}
