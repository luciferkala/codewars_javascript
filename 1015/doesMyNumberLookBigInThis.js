function narcissistic(value) {
  let exp = value.toString();
  let splitNum = exp.split("");
  let check = 0;
  exp = exp.length;

  for (var i = exp; i > 0; i--) {
    let num = parseInt(splitNum[i - 1]);
    check += Math.pow(num, exp);
  }
  if (check === value) return true;
  else return false;
}
