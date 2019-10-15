function pigIt(str) {
  let arr = str.split(" ");
  let result = "";

  for (i of arr) {
    let newString = "";
    let firstLetter = i.charAt(0);
    newString = i.slice(1).concat(firstLetter);
    if (i !== "!" && i !== "?") {
      newString = newString.concat("ay");
    }

    result = result.concat(" " + newString);
  }
  result = result.trim();
  return result;
}
