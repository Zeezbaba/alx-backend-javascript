/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let employee = '';

  for (const [index, value] of Object.entries(reportWithIterator)) {
    employee += `${value}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      employee += ' | ';
    }
  }

  return employee;
}
