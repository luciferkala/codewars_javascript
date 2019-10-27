process.stdin.setEncoding("utf8");
process.stdin.on("data", data => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let column = 0; column < b; column++) {
    let str = "";

    for (let row = 0; row < a; row++) {
      str = str.concat("*");
    }
    console.log(str);
  }
});

/*
    str = '*'.repeat(a); 를 이용하면 for문을 하나로 줄일 수 있음
*/
