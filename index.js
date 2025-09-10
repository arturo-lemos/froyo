const order = [];
let flavors = prompt(
  "Please input your flavor. Use a comma to separate each order. For ex: vanilla,strawberry,coffee,coffee (this will order 1 vanilla, 1 strawberry, and 2 coffee)"
);
let orderList = flavors.split(",");

for (let i = 0; i < orderList.length; i++) {
  order.push(orderList[i].trim());
}
console.log("Your order:", order);
const count = {};
for (let i = 0; i < order.length; i++) {
  let flavor = order[i];
  if (count[flavor]) {
    count[flavor]++;
  } else {
    count[flavor] = 1;
  }
}

console.log("Your flavors:", count);
