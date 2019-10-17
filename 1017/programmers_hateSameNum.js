function solution(arr) {
  var answer = [];
  let j = 0;
  answer.push(arr[0]);
  for (var i in arr) {
    if (arr[i] != answer[j]) {
      answer.push(arr[i]);
      j++;
    }
  }

  return answer;
}
