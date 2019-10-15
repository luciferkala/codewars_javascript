function calc(expr) {
  if (expr === "") return 0;
  else if (expr == parseFloat(expr)) return parseFloat(expr);
  else {
    let ex = expr.split(" ");
    let operand = [];
    for (i of ex) {
      if (i == parseFloat(i)) {
        operand.push(i);
      } else {
        let a = operand.pop();
        let b = operand.pop();
        let c = eval(b + i + a);
        operand.push(c);
      }
    }
    return parseFloat(operand[0]);
  }
}
