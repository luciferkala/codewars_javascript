function solution(a, b) {
  let weeks = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let beforeDays =
    a != 1
      ? days.slice(0, a - 1).reduce((acmul, element) => acmul + element) + b
      : b;

  let answer = weeks[beforeDays % 7];
  return answer;
}
