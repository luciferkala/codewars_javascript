function solution(n, arr1, arr2) {
  let tmp = [];
  let answer = [];
  let bit = 1 << (n - 1);
  // 2진 변환 및 대입
  for (let i = 0; i < n; i++) {
    tmp.push(arr1[i] | arr2[i]);
  }
  answer = tmp.map((element, index) => {
    let str = "";
    let test = element;
    for (let j = n - 1; j >= 0; j--) {
      if (Math.floor(test / bit) === 1) {
        str = str.concat("#");
        test -= bit;
      } else {
        str = str.concat(" ");
      }
      bit = bit >> 1;
    }
    bit = 1 << (n - 1);
    return str;
  });
  return answer;
}

/*
더 짧고 효율적인 답
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}
*/
