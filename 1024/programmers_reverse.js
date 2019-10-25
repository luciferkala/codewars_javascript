function solution(n) {
  var answer = [];
  answer = String(n)
    .split("")
    .reverse()
    .map(element => parseInt(element));
  return answer;
}
