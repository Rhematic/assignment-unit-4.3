console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;

let basket = [];

function addItem(item) {
  if (isFull() !== true) {
    basket.push(item);
    return true;
  } else if (isFull() === true) {
    return false;
  }
}

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else if (basket.length >= maxItems) {
    return true;
  }
}

function removeItem(item) {
  let itemGone = item;
  let itemChecker = basket.indexOf(item);
  if (itemChecker === -1) {
    return null;
  } else if (itemChecker !== -1) {
    basket.splice(itemChecker, 1);
    return itemGone;
  }
}

console.log("Adding 6 items below");
addItem("cherry");
addItem("mango");
addItem("cake");
addItem("apple");
addItem("corn");
addItem("butter");

function listItems() {
  for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
}

console.log("List of items in basket is as follows:");
listItems(basket);

function empty() {
  while (basket.length > 0) {
    basket.pop();
  }
}

console.log("***Function to empty basket is run here***");
empty(basket);

console.log("After being emptied the basket length is: ", basket.length);

addItem("cake");
// addItem("apple");
// addItem("corn");
// addItem("butter");
// addItem("shellfish");
// addItem("grapes");

console.log("--------- indeededly --------");

console.log("The basket is full: ", isFull(basket));

console.table(basket);
console.log("remove this item", removeItem("cake"));
// console.log(
//   "In removeItem function and the index of item is: ",
//   basket.indexOf("butter")
// );

console.table(basket);

console.log("remove this item", removeItem("Invisible Fruit"));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== "undefined" ? basket : undefined,
    addItem: typeof addItem !== "undefined" ? addItem : undefined,
    listItems: typeof listItems !== "undefined" ? listItems : undefined,
    maxItems: typeof maxItems !== "undefined" ? maxItems : undefined,
    empty: typeof empty !== "undefined" ? empty : undefined,
    isFull: typeof isFull !== "undefined" ? isFull : undefined,
    removeItem: typeof removeItem !== "undefined" ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
