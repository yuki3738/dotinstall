(() => {
  'use strict';

  // const d = moment();
  // const d = moment('2018-01-10');
  // const d = moment('01-10-2018', 'MM-DD-YYYY');
  // const d = moment(new Date(2018, 0, 10));
  const d = moment([2018, 0, 10]);
  console.log(d.format('LLLL'));
})();
