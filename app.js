// NUMBER
let soldQuantity = 1500;
let pricePerItem = 2.5;
const totalRevenue = soldQuantity * pricePerItem;
console.log("Total Revenue: $" + totalRevenue);
console.log("Type _ " + typeof totalRevenue);

// STRING
let message = "Great job! You have exceeded the revenue target. Keep it up!";
console.log(message);
console.log("Type _ " + typeof message);

// Boolean
let isTargetMet = true;
console.log("Revenue Target Is Met _ " + isTargetMet);
console.log("Type _ " + typeof isTargetMet);

// Undefined
let bonusAmount;
console.log("Bonus Amount _ " + bonusAmount);
console.log("Type _ " + typeof bonusAmount);

// Null
let discount = null;
console.log("Discount _ " + discount);
console.log("Type _ " + typeof discount);

// concatenation
let name = "Tamari";
let dayofWeek = "Sunday";
let favoriteActivity = "painting";

let greeting1 =
  "Hi, my name is " +
  name +
  "! Today is " +
  dayofWeek +
  ", a perfect day for " +
  favoriteActivity +
  ".";
console.log(greeting1);

const greeting2 = `Hi, my name is ${name}! Today is ${dayofWeek}, a perfect day for ${favoriteActivity}.`;
console.log(greeting2);
