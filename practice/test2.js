function toWeirdCase(s) {
  let data = s.split('');
  let start = 0;
  for (let i = 0; i < data.length; i++) {
      if (!(start++ % 2)) data[i] = data[i].toUpperCase();      
      if (data[i] === ' ') start = 0; 
  }
  return data.join(' ');
}