function solution(answers) {
  var answer = [];
  /*
    입력 : 숫자로 이루어진 배열 1부터 1만까지 (수는 1,2,3,4,5)
    출력 : 가장 많이 맞춘 학생의 번호배열
    1번 : 1, 2, 3, 4, 5
    5n+0, 1, 2, 3, 4 (n >= 0)
    2번 : 2 1 2 3 2 4 2 5 2 1 2 3 2 4 2 5
         0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
    k = 2n => 2, 나머지는 1, 3, 4, 5
    1 = 1,9 ,17  => 8n + 1
    3 = 3, 11 => 8n + 3
    4 = 5, 13 => 8n + 5
    5 = 7 15 => 8n + 7
    
    3번
    3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5
    0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19
    10n + 0,1 => 3
    10n+ 2,3 => 1
    10n + 4,5 => 2
    10n + 6,7 => 4
    10n + 8,9 => 5
    */
  let first = 0;
  let second = 0;
  let third = 0;
  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (var i in answers) {
    if (answers[i] === arr1[i % 5]) first++;
    if (answers[i] === arr2[i % 8]) second++;
    if (answers[i] === arr3[i % 10]) third++;
  }
  let result = Math.max(first, second, third);
  if (result === first) answer.push(1);
  if (result === second) answer.push(2);
  if (result === third) answer.push(3);
  return answer;
}
