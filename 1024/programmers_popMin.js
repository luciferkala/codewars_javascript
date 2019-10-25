function solution(arr) {
  var tmp = [];
  tmp = arr.slice("").sort((a, b) => b - a);
  let min = tmp[tmp.length - 1];
  let answer = arr.slice();
  let minIndex = answer.indexOf(min);

  answer.splice(minIndex, 1);
  if (answer.length === 0) answer.push(-1);
  return answer;
}
