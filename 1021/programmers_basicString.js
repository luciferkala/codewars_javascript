function solution(s) {
  var answer = true;
  let len = s.length;

  if (s.indexOf(".") !== -1) len--;

  if (len !== 4 && len !== 6) return false;
  if (s.includes("e")) return false;

  let test = Number(s);
  answer = !isNaN(test) ? true : false;

  return answer;
}
