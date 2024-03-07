/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
let grandTotal = 0

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

// Create objects: strawberry, orange, cherry
const prod1 = {
  name: 'strawberry',
  price: 5.99,
  quantity: 0, // quantity in cart should start at zero
  productId: 1,
  image: './images/strawberry.jpg'
};

const prod2 = {
  name: 'orange',
  price:  1.99,
  quantity: 0, // quantity in cart should start at zero
  productId: 2,
  image: './images/orange.jpg'
};

const prod3 = {
  name: 'cherry',
  price: 8.99,
  quantity: 0, // quantity in cart should start at zero
  productId: 3,
  image: './images/cherry.jpg'
};

// Adding products into products array
products.push(prod1);
products.push(prod2);
products.push(prod3);
//console.log(products);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

function addProductToCart(productId) {
  const product = products.find(eachProduct => eachProduct.productId === productId)
  console.log(`Found Product ${product.productId}`);
  product.quantity += 1

  let isProductInCart = cart.find(eachProduct => eachProduct.productId === product.productId)

  // isProductInCart checks if the product is already in cart 
  if (!isProductInCart) {
    cart.push(product);
    console.log(`Product ${productId} has been added to the cart: ${cart}`);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId) {
  let product = products.find(product => product.productId === productId)
  product.quantity += 1
  console.log(`increaseQuantity - ${product.quantity}`)
}


/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  let product = cart.find(product => product.productId === productId)
  product.quantity -= 1
  console.log(`decreaseQuantity - ${product.quantity}`, cart)
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId) {
  let product = cart.find(product => product.productId === productId);
  if (product) {
    product.quantity = 0;
    const index = cart.indexOf(product);
    cart.splice(index, 1);
    console.log(`Item ${product} has been removed from cart`)
    }
};

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += (cart[i].quantity*cart[i].price); 
  }
  console.log(`Cart Total (Price): ${sum}`)
  grandTotal = sum
  return sum.toFixed(2);
};

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

function pay(amount) {
  console.log(`Cash Received: ${amount}, Cart Total:${grandTotal}`)
  return  amount - grandTotal;
};

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

// module.exports = {
//   products,
//   cart,
//   addProductToCart,
//   increaseQuantity,
//   decreaseQuantity,
//   removeProductFromCart,
//   cartTotal,
//   pay, 
//   emptyCart,

  /* Uncomment the following line if completing the currency converter bonus */
  // currency
