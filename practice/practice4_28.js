function getDayName(a, b) {
  const week = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let tempDay = 0;
  let tempWeek = 0;

  for (let i = 0; i < a - 1; i++) {
    tempDay += month[i];
  }
  tempDay += b;

  tempWeek = week[tempDay % 7];

  return tempWeek;
}

console.log(getDayName(5, 24)); // TUE