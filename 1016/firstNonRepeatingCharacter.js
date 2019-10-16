function firstNonRepeatingLetter(s) {
  console.log(s);
  let arr = s.toLowerCase().split("");
  let answer = arr.filter(
    word => arr.indexOf(word, arr.indexOf(word) + 1) == -1
  );

  if (answer.length == 0) return "";
  else if (s.includes(answer[0])) return answer[0];
  else return answer[0].toUpperCase();
}
