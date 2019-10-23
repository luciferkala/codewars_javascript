function solution(n) {
  var answer = 0;
  let check = false;
  if (n < 16) {
    for (var i = 2; i <= n; i++)
      for (var j = 2; j <= i; j++) {
        if (i === j) {
          answer++;
          break;
        } else if (i % j === 0) break;
      }
  } else {
    for (var i = 2; i <= n; i++) {
      let t = Math.sqrt(i);
      for (var j = 2; j <= t; j++) {
        if (i % j === 0) break;
      }
      if (j > t) check = true;

      if (check) {
        answer++;
        check = false;
      }
    }
  }
  return answer;
}
