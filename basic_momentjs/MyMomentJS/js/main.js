(() => {
  'use strict';

  const d = moment('2018-01-10 15:35:24');
  // console.log(d.get('year'));
  // console.log(d.get('month')); // 0-11
  // console.log(d.get('date'));
  // console.log(d.get('day')); // 0-6
  // console.log(d.get('hour'));
  // console.log(d.get('minute'));
  // console.log(d.get('second'));
  // console.log(d.get('millisecond'));
  // console.log(d.get('y'));
  // console.log(d.get('M')); // 0-11
  // console.log(d.get('D'));
  // console.log(d.get('d')); // 0-6
  // console.log(d.get('H'));
  // console.log(d.get('h'));
  // console.log(d.get('m'));
  // console.log(d.get('s'));
  // console.log(d.get('ms'));
  console.log(d.year());
  console.log(d.month());
  console.log(d.date());
})();