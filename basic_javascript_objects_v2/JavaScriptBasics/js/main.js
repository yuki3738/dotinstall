'use strict';

{
  const d = new Date(2020, 3);
  d.setHours(10, 20, 30);
  d.setDate(31);
  d.setDate(d.getDate() + 3);
  console.log(d);
}
