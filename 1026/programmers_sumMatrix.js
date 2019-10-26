function solution(arr1, arr2) {
  var answer = [];
  let row = arr1.length;
  let column = arr1[0].length;

  for (let i = 0; i < row; i++) {
    //row
    answer.push([]);
    for (let j = 0; j < column; j++) {
      //column
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}

// 간결한 코드 return A.map((a,i) => a.map((b, j) => b + B[i][j]));
