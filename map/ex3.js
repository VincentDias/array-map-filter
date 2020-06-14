/* Array.prototype.map - Exercise 3

* FAIR WARNING: this one is harder than the two others!
* Write the CONTENTS of the `getMoviesFreshness` function
* It receives an array of OBJECTS representing movies
* Each "movie" object has two properties:
   * `name` name of the movie
   * `rating` the average rating it's been given on rottentomatoes.com
* `getMoviesFreshness` must return an array containing the objects of the input array, EACH
  having a new property. The KEY of this new property should be `label`, and the associated VALUE
  should be a string, which depends on the `rating` property:
  * If `rating` is STRICTLY below 60, the value to assign to `label` is "rotten".
  * If `rating` is between 60 and 75 (included), the value to assign to `label` is "fresh".
  * If `rating` STRICTLY above 75, the value to assign to `label` is "certified fresh".
* You might need a refresher on how to manipulate object literals:
  https://www.dyn-web.com/tutorials/object-literal/properties.php

Sample movies array, i.e. INPUT:
*/
const tab1 =
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93
    },
    {
      name: 'Skyscraper',
      rating: 46
    },
    {
      name: 'Leave No Trace',
      rating: 100
    },
    {
      name: 'White Boy Rick',
      rating: 60
    }
  ]

/*
Expected OUTPUT for this sample:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93,
      label: 'certified fresh'
    },
    {
      name: 'Skyscraper',
      rating: 46,
      label: 'rotten'
    },
    {
      name: 'Leave No Trace',
      rating: 100,
      label: 'certified fresh'
    },
    {
      name: 'White Boy Rick',
      rating: 60,
      label: 'fresh'
    }
  ]

 */

function getMoviesFreshness(tab1) {
  const newTab = tab1.map(line => {
    if (line.rating < 60) {
      let source = { label: 'rotten' };
      const newObj = Object.assign(line, source);
      return newObj;
    } else if (line.rating >= 60 && line.rating <= 75) {
      let source1 = { label: 'fresh' };
      const newObj2 = Object.assign(line, source1);
      return newObj2;
    } else if (line.rating > 75) {
      let source2 = { label: 'certified fresh' };
      const newObj3 = Object.assign(line, source2);
      return newObj3;
    }
  })
  return newTab;
}


getMoviesFreshness(tab1);



// DON'T TOUCH THIS!
module.exports = getMoviesFreshness;
