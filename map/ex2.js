/* Array.prototype.map - Exercise 2

* Write the CONTENTS of the `getFoodCategories` function
* It receives an array of OBJECTS as an argument
* Each object in this array has two attributes:
    `food` is the name of a food product
    `isVegetarian` is a boolean, indicating if this product is suitable for vegetarians
* Using map, `getFoodCategories` must return an array of STRINGS.
* For each element (object) of the input `foods` array, the corresponding element in the
  output array can be computed this way:
    * "FOOD is suitable for vegetarians" if the `isVegetarian` attribute is true
    * "FOOD is not suitable for vegetarians" if the `isVegetarian` attribute is false
    (replace FOOD with the `food` attribute)

Sample foods array, i.e. INPUT:
*/
const tab =
  [
    {
      food: 'Bacon',
      isVegetarian: false
    },
    {
      food: 'Sausage',
      isVegetarian: false
    },
    {
      food: 'Tofu',
      isVegetarian: true
    },
    {
      food: 'Chick Pea',
      isVegetarian: true
    }
  ]
/*

Expected OUTPUT for this sample
[
  'Bacon is not suitable for vegetarians',
  'Sausage is not suitable for vegetarians',
  'Tofu is suitable for vegetarians',
  'Chick Pea is suitable for vegetarians'
]

*/

function getFoodCategories(foods) {
  //for (food of foods) {
  const newTab = foods.map(food => {
    if (food.isVegetarian === true) {
      return food.food + " is suitable for vegetarians";
    } else {
      return food.food + " is not suitable for vegetarians";
    }
  })
  return newTab;
}





// for (food of foods) {
//   if (food.isVegetarian === true) {
//     console.log(food.food + " is suitable for vegans");
//   } else {
//     console.log(food.food + " is not suitable for vegans");
//   }
// }

getFoodCategories(tab);



// DON'T TOUCH THIS!
module.exports = getFoodCategories;
