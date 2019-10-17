function solution(s) {
  let arr = s.split(" ");
  var answer = [];

  for (var i in arr) {
    let tmp = "";
    for (var j = 0; j < arr[i].length; j++) {
      if (j % 2 === 0) tmp = tmp.concat(arr[i][j].toUpperCase());
      else tmp = tmp.concat(arr[i][j].toLowerCase());
    }
    answer.push(tmp);
  }
  var result = answer.join(" ");
  return result;
}
