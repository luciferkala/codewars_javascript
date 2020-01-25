/* 
입력 : 전체 학생 수 : n, (n >= 2 , n<= 30 )
      체육복을 도난당한 학생들 번호의 배열 lost, (length >= 1, length <= n)
      여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve (length >= 1, length <= n)

*/
class Student {
  constructor(index) {
    this.index = index;
    this.cloth = 1;
  }

  reserved() {
    this.cloth++;
  }

  losted() {
    this.cloth--;
  }

  showClothNum() {
    return this.cloth;
  }
}

function solution(n, lost, reserve) {
  const 학생옷없음 = 0;
  const 학생옷 = 1;
  const 학생옷여분벌수 = 2;

  const 학생들 = [];
  문제설정();
  옷빌려오기(학생들);
  console.log(학생들);
  return 수업참여학생수세기(학생들);

  function 문제설정() {
    문제설정_초기화(학생들, n);
    console.log("1---------------------");
    console.log(학생들);
    문제설정_학생옷여분(학생들, reserve);
    console.log("2---------------------");
    console.log(학생들);
    문제설정_학생옷분실(학생들, lost);
    console.log("3---------------------");
    console.log(학생들);
    console.log("4---------------------");
  }

  function 수업참여학생수세기(학생들) {
    let 수업참여학생수 = 0;

    for (let 학생 of 학생들) {
      if (학생.showClothNum() >= 학생옷) 수업참여학생수++;
    }
    return 수업참여학생수;
  }

  function 옷빌려오기(학생들) {
    for (let 순번 = 1; 순번 < 학생들.length; 순번++) {
      if (학생들[순번].showClothNum() == 학생옷없음) {
        if (앞학생옷빌려오기(순번, 학생들)) continue;
        뒤학생옷빌려오기(순번, 학생들);
      }
    }
  }

  function 앞학생옷빌려오기(순번, 학생들) {
    if (순번 == 0) return false;
    if (학생들[순번 - 1].showClothNum() == 학생옷여분벌수) {
      학생들[순번 - 1].losted();
      학생들[순번].reserved();
      return true;
    }
  }
  function 뒤학생옷빌려오기(순번, 학생들) {
    if (순번 >= 학생들.length - 1) return false;
    if (학생들[순번 + 1].showClothNum() == 학생옷여분벌수) {
      학생들[순번 + 1].losted();
      학생들[순번].reserved();
    }
  }

  // function 문제설정(학생수, 옷분실학생, 옷여분학생) {
  //   for (let 순번 = 0; 순번 <= 학생수; 순번++) {
  //     let 학생 = new Student들(순번 + 1);
  //     학생 = new Student(옷분실학생);
  //     if (옷분실학생.includes(학생.index)) 학생.losted();
  //     if (옷여분학생.includes(학생.index)) 학생.reserved();
  //     학생들.push(학생);
  //   }
  //   return 학생들;
  // }
  function 문제설정_초기화(학생들, 개수) {
    for (let 순번 = 0; 순번 <= 개수 - 1; 순번++) {
      let 학생 = new Student(순번);
      학생들[학생.index] = 학생;
    }
  }
  function 문제설정_학생옷분실(학생들, 분실학생들) {
    for (let 순번 = 0; 순번 <= 분실학생들.length - 1; 순번++) {
      학생들[분실학생들[순번] - 1].losted();
    }
  }
  function 문제설정_학생옷여분(학생들, 여분학생들) {
    for (let 순번 = 0; 순번 <= 여분학생들.length - 1; 순번++) {
      학생들[여분학생들[순번] - 1].reserved();
    }
  }
}
console.log("*********************************");
console.log(solution(10, [3], [5, 6, 7, 8]));
console.log("*********************************");
console.log(solution(5, [2, 4], [3]));
console.log(solution(5, [5], [3]));
console.log(solution(7, [2, 3, 4], [1, 2, 3, 6]));
