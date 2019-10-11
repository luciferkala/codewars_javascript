function createPhoneNumber(numbers){
  var charactors = ['(', ')',' ','-'];
  var result = '';
  var j = 0;
  for (var i = 0; i < 14; i++) {
    switch (i) {
      case 0:
        result += charactors[0];
        break;
      case 4:
        result += charactors[1];
        break;
      case 5:
        result += charactors[2];
        break;
      case 9:
        result += charactors[3];
        break;
      default:
        result += numbers[j++];
        break;
    }
  }
  return result;
}
