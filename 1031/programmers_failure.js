function solution(N, stages) {
  /*
        입력 : 스테이지 개수 N >= 1 && N <= 500,
        배열 stages.length >= 1 && <= 200000
        stage의 각각의 원소는 >= 1 && <= N+1
        출력 : 배열 result [] 실패율이 높은 스테이지 순이며,
        실패율이 같다면, 작은 번호의 스테이지가 먼저 옴.
        스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0
        
        실패율 배열 = [1/8, 3/7, 2/4, 1/2, 0, 0] 길이는 N
        3,4,2,1,5,6
        스테이지 수의 개수 / 스테이지 이상인 수 개수
        1. 스테이지 수의 개수와 스테이지 이상의 개수를 구해서 실패율을 구한다.
        2. 구한 실패율을 크기대로 정렬한다.
        2-1. 실패율의 크기가 같다면 인덱스 오름차순으로 배열한다.
        모든 스테이지를 모아놓은 거
    */
  let fails = [];
  let answer = [];
  for (let i = 1; i <= N; i++) {
    //실패율 구하고 배열 만들기
    let filt = stages.filter(element => {
      return element >= i;
    }); //전체 시도 한 사람들
    let fil = filt.filter(element => element === i); // 실패한 사람들
    let fail = filt.length !== 0 ? fil.length / filt.length : 0; //실패율 = 실패한 사람 / 전체 시도한 사람

    fails.push(fail);
  }
  //정렬 시작

  /*
    중복된 값이 있을 때 다르게 인덱스를 집어넣는 로직
    정렬을 한다.
    정렬된 배열과 아닌 배열을 본다.
    아닌 배열에서 정렬된 배열의 요소를 각각 index를 찾아서 +1 해주고 집어 넣어준다.
    만약에 이미 있는 숫자라면 그 숫자보다 큰 곳에서 찾는다.
    */
  let tmp = fails.entries();
  let test = [];
  for (let e of tmp) {
    test.push(e);
  }
  test.sort((a, b) => {
    return b[1] - a[1];
  });
  for (let i of test) {
    answer.push(i[0] + 1);
  }
  return answer;
}
