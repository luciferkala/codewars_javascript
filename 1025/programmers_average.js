function solution(arr) {
  var answer = arr.reduce((accumulator, element) => accumulator + element);
  answer /= arr.length;
  return answer;
}
