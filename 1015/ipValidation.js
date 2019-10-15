function isValidIP(str) {
  let arr = str.split('.'); 
  if (arr.length != 4)
    return false;
  for (var i of arr) {
  let tmp = parseInt(i);
  let a = i.split('');
  a = a.map(element => {
    return parseInt(element)
    });
    if (isNaN(tmp)) {
      return false;
    }
    else if (i.charAt(0) == 0 && i.length !== 1)
      return false;
    else if (i.charAt(0) === ' ' || i.charAt(i.length-1) === ' ' || i.charAt(0) === '\n' || i.charAt(i.length-1) ==='\n')
      return false;
    else if (a.includes(NaN))
      return false;
    else if (tmp < 0 || tmp > 255 )
      return false;
  }
   
  return true;
}
