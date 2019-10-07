function toWeirdCase(string){
  let res = string.split(' ');
  let tmp = '';
  res.map((element) => {
    for (var i = 0; i <= element.length; i++) {
      if (i === element.length) {
        tmp += ' ';
        break;
        }
      if (i % 2 === 0) {
        tmp += element[i].toUpperCase();
        }
      else if (i % 2 !== 0) {
        tmp += element[i].toLowerCase();
        }
    }
  });
  return tmp.substring(0, tmp.length-1);
}
