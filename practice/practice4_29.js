function getCurrentWeek(y, m, d) {

  const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const res = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  let tempToday = 0;
  let tempWeek = 0;

  for (let i = 0; i < m - 1; i++) {
    tempDay += month[i];
  }

  tempToday += d;
  tempWeek = res[(tempToday % 7) - 1];

  console.log(tempToday);
  console.log(tempWeek);
}

console.log(getCurrentWeek(2021, 1, 10));
/*
오늘이 2020-04-21인 경우,
[
  '2020-04-19',
  '2020-04-20',
  '2020-04-21',
  '2020-04-22',
  '2020-04-23',
  '2020-04-24',
  '2020-04-25'
]
*/