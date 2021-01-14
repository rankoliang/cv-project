import { format, parse } from 'date-fns';

function maxDate(a, b) {
  function stringToDate(date) {
    return parse(date, 'yyyy-MM-dd', new Date());
  }

  a = stringToDate(a);
  b = stringToDate(b);

  const max = a > b ? a : b;

  return format(max, 'yyyy-MM-dd');
}

export default maxDate;
