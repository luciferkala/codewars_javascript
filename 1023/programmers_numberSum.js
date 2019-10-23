function solution(n) {
  let answer = String(n)
    .split("")
    .map(element => parseInt(element))
    .reduce((acc, total) => acc + total);

  return answer;
}
