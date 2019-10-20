function solution(n) {
  var answer = "";
  var odd = "수";
  var even = "박";

  for (var i = 1; i <= n; i++) {
    if (i % 2 === 1) answer = answer.concat(odd);
    else answer = answer.concat(even);
  }
  return answer;
}
