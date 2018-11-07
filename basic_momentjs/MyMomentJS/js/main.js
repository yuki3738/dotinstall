(() => {
  'use strict';

  const d = moment('2018-01-10');
  d.locale('en');
  console.log(d.format('MMMM Do, dddd'));
})();
