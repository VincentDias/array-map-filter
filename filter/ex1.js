/* Array.prototype.filter - Exercise 1

* Write the CONTENTS of the `getPositiveNumbers` function (don't rename it!)
* It receives an array of numbers as an argument
* Inside the function, use filter on the array of numbers to keep ONLY positive numbers (incl. zero)
* Return the result of filter

Sample numbers array, i.e. INPUT:
*/
const tab =
  [7, -4, 2, 0, -10, 3, 11];
/*

Expected OUTPUT for this sample:
[7, 2, 0, 3, 11]

*/

function getPositiveNumbers(tab) {
  const newTab = tab.filter(element => element >= 0);
  return newTab;

}
getPositiveNumbers(tab);
// If you need, you can always visualize the result with a console.log.
// In that case, uncomment the line below (you can also add your own
// console.log INSIDE the function).
// Instead of running `npm test`, you can then use `node filter/ex1`
// (you still need to run `npm test` to make sure you did right).

// console.log(getPositiveNumbers([-2, -1, 0, 1, 2]));

// DON'T TOUCH THIS!
module.exports = getPositiveNumbers;
