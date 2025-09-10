const order = []; //Created an empty array called order to store the user inputs.
let flavors = prompt(
  "Please input your flavor. Use a comma to separate each order. For ex: vanilla,strawberry,coffee,coffee (this will order 1 vanilla, 1 strawberry, and 2 coffee)"
); //Prompt that explains how user should input their flavor selections.
let orderList = flavors.split(","); //Declared variable orderList which is the result of the flavors input turned into strings and separated by commas.

for (let i = 0; i < orderList.length; i++) {
  order.push(orderList[i].trim()); //For loop that pushes flavor inputs into the order variable.
}
console.log("Your order:", order); //console log the order.
const count = {}; //Create an empty object called count.
for (let i = 0; i < order.length; i++) {
  let flavorCount = order[i]; //for loop
  if (count[flavorCount]) {
    count[flavorCount]++;
  } else {
    count[flavorCount] = 1;
  }
}

console.log("Your flavors:", count);
