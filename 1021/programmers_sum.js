function solution(a, b) {
  var answer = 0;
  let smaller = 0;
  let larger = 0;

  if (a === b) {
    answer = a;
    return answer;
  }
  smaller = a < b ? a : b;
  larger = a < b ? b : a;

  for (var i = smaller; i <= larger; i++) {
    answer += i;
  }

  return answer;
}
