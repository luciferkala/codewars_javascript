function solution(s) {
  let answer = false;
  let p = 0;
  let y = 0;
  let arr = s
    .toLowerCase()
    .split("")
    .filter(element => element === "p" || element === "y");

  for (var i in arr) {
    if (arr[i] === "p") p++;
    else y++;
  }

  if (p === y) answer = true;

  return answer;
}
