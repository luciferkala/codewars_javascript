function collatz(arr) {
  if (arr[1] > 500) {
    arr[1] = -1;
    return arr;
  } else if (arr[0] === 1) {
    return arr;
  } else if (arr[0] % 2 === 0) {
    arr[1]++;
    arr[0] /= 2;
    return collatz(arr);
  } else {
    arr[1]++;
    arr[0] = arr[0] * 3 + 1;
    return collatz(arr);
  }
}
function solution(num) {
  var answer = 0;
  var arr = [];
  arr.push(num);
  arr.push(0);
  /* 
        입력: 정수 1개
        출력 : 콜라츠 추측이 시행된 횟수, 단 횟수가 500을 초과 했을 때, -1 반환
        재귀로 풀어보기
        재귀는 전체 문제풀이를 트리라고 볼 때, 현재 노드를 명시적인 매개변수로 표현해야 한다.
        그러면 들어오는 매개변수는 횟수와 값을 받아야 한다. -> 배열로 받아보자.
        그리고 베이스 케이스를 정해야 함.
        1) 들어온 수가 1이면, 한번만에 성공한 것이니 1을 반환.
        2) 들어온 횟수가 500보다 크면, -1이 되어야 함.
        3) 리턴 값이 -1을 받으면 그대로 중지.
        2) 들어온 수가 짝수라면, 그 수의 반을 나눠서 재귀
        3) 들어온 수가 홀수라면, 3을 곱하고 1을 더해서 재귀
    */
  answer = collatz(arr);
  return answer[1];
}

/* 아이디어는 같으나 깔끔한 코드 (삼항연산자를 교차로 이용하면서 짧은 코딩으로 해결)
function collatz(num,count = 0) {
    return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
}
*/
