function solution(s) {
  var answer = s
    .split("")
    .map(element => element.charCodeAt())
    .sort((a, b) => b - a)
    .map(element => String.fromCharCode(element))
    .join("");
  return answer;
}
