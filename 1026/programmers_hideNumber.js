function solution(phone_number) {
  let answer = "";
  let len = phone_number.length;

  for (var i = 0; i < len; i++) {
    if (i < len - 4) answer = answer.concat("*");
    else answer = answer.concat(phone_number[i]);
  }

  return answer;
}
