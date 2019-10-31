function solution(d, budget) {
  let arr = d.slice("").sort((a, b) => a - b);
  let answer = 0;
  let sum = 0;
  for (let i in arr) {
    if (sum < budget) {
      sum += arr[i];
      answer++;
    }
    if (sum > budget) {
      sum -= arr[i];
      answer--;
      break;
    }
  }
  return answer;
}

/* 같은 결과 더 좋은 답 (그러나 파라미터 배열을 바꾸지 않는 방법이 더 좋을 것 같음)
function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}

*/
