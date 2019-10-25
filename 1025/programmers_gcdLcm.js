function solution(n, m) {
  var answer = [];
  /*
    입력 : 두 정수 n, m. 범위는 1이상 10^6 이하
    출력 : 배열 [gcd, lcm]
    gcd => 호제법으로 구한다.
    호제법 : 큰수 / 작은수 => 나머지가 있으면, 작은수 / 나머지 => 나머지가 있으면 반복
    나머지가 0이면 나눠지는 수가 최대공약수
    최소 공배수는 두 수를 최대공약수로 나누고, 최대 공약수 * 나눠진 두 수 = 최소 공배수
    큰수와 작은수로 분리하기
    조건으로 반복문을 돌리는게 편리 => while
    */
  let larger = n <= m ? m : n;
  let less = larger === m ? n : m;
  let gcd = 0;
  let lcm = 0;
  while (larger % less !== 0) {
    //반복이 끝나면 larger % less === 0;
    let tmp = 0;
    tmp = larger % less;
    larger = less;
    less = tmp;
  }
  gcd = less;
  larger = n <= m ? m / gcd : n / gcd;
  less = larger === m / gcd ? n / gcd : m / gcd;
  lcm = gcd * larger * less;

  answer.push(gcd);
  answer.push(lcm);

  return answer;
}
