function solution(n) {
  var answer = 0;
  /*
    입력: 정수 n, 1이상 5*10^13 이하
    출력: 정수 1개 (sqrt(n)이 정수형태이면 pow(sqrt(n), 2))를 반환, 아니라면 -1
    */
  answer = Math.sqrt(n);
  if (Number.isInteger(answer)) {
    answer = Math.pow(answer + 1, 2);
  } else {
    answer = -1;
  }

  return answer;
}
