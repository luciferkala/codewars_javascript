function solution(s) {
  var answer = "";
  let len = s.length;

  if (len % 2 !== 0) {
    let mid = Math.ceil(len / 2) - 1;
    answer = s.charAt(mid);
  } else {
    let mid = len / 2;
    answer = s.charAt(mid - 1) + s.charAt(mid);
  }
  return answer;
}
