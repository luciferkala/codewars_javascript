function solution(s, n) {
  var answer = "";
  /* 
        입력 : 문자열 s, 거리 n
        n은 1이상 25이하.
        s는 알파벳 소문자, 대문자, 공백
        s.length <= 8000
        26개 
        A ~ Z : 65 ~ 90 (90 ~ 115)
        a ~ z : 97 ~ 122 (122 ~ 147)
        a -> z, b -> a  = 값이 122를 넘어가면, 26을 뺀다.
        A ~ Z : 90이 넘어가면 66+ 25 = 91 -> 65 (26빼기)
        더한 값의 아스키 코드 값이 91 이상 이면 26을 뺌,
        더한 값의 아스키 코드 값이 123이상이면 26을 뺌.
        더하고 빼야 됨. 안그러면 값이 변동 될 수 있음.
        공백의 아스키코드는 32. 공백은 넘어감.
    */
  let str = s.split("");
  answer = str.map(element => {
    let tmp = element.charCodeAt();

    if (element === " ") return element;
    else {
      //char
      tmp += n;

      if (element.charCodeAt() <= 90 && tmp >= 91) {
        tmp -= 26;
      } else if (element.charCodeAt() <= 122 && tmp >= 123) tmp -= 26;
    }
    return String.fromCharCode(tmp);
  });
  return answer.join("");
}
