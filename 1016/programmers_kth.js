function solution(array, commands) {
  let answer = [];
  for (let cmd of commands) {
    let arr = array.slice(cmd[0] - 1, cmd[1]).sort((a, b) => {
      return a - b;
    });
    answer.push(arr[cmd[2] - 1]);
  }
  return answer;
}
