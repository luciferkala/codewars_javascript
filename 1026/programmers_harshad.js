function solution(x) {
  var answer = true;
  let sum = String(x)
    .split("")
    .map(element => Number(element))
    .reduce((ac, ans) => ac + ans);
  answer = x % sum === 0 ? true : false;
  return answer;
}
