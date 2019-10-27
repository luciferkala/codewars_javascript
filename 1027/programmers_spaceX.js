function solution(x, n) {
  var answer = [];
  let num = x;
  let acc = 1;
  answer.length = n;
  answer.fill(0);
  answer = answer.map(element => num * acc++);

  return answer;
}

//같은 코드
/* 
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
} 
*/
