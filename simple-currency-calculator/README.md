# Net Income Calculator (Hyperskill Project)

A simple console-based JavaScript application built to calculate shop income, expenses, and net profit.

---

## Stage 1: Print Product Prices

### Task
Print the list of available shop products along with their selling prices.

### Solution
```javascript
const items = [
    "Bubblegum: $2",
    "Toffee: $0.2",
    "Ice cream: $5",
    "Milk chocolate: $4",
    "Doughnuts: $2.5",
    "Pancake: $3.2"
];

console.log("Prices:");
for (let item of items) {
    console.log(item);
}
```

---

## Stage 2: Calculate Total Income

### Task

Calculate the total earned amount from all sold items during the first month.

### Solution

```javascript
const items = [
    { name: 'Bubblegum: $', price: 202 },
    { name: 'Toffee: $', price: 118 },
    { name: 'Ice cream: $', price: 2250 },
    { name: 'Milk chocolate: $', price: 1680 },
    { name: 'Doughnut: $', price: 1075 },
    { name: 'Pancake: $', price: 80 }
];

let totalIncome = 0;

console.log("Earned amount:");
for (let item of items) {
    console.log(item.name + item.price);
    totalIncome += item.price;
}

console.log("Income: $" + totalIncome);

```

---

## Stage 3: Calculate Net Income (Final Stage)

### Task

Retrieve staff expenses and other expenses from user input using `sync-input`, subtract them from total income, and output the net income.

### Solution

```javascript
const input = require('sync-input');

const items = [
    { name: 'Bubblegum: $', price: 202 },     { name: 'Toffee:$', price: 118 },
    { name: 'Ice cream: $', price: 2250 },     { name: 'Milk chocolate:$', price: 1680 },
    { name: 'Doughnut: $', price: 1075 },     { name: 'Pancake:$', price: 80 }
];

let totalIncome = 0;

console.log("Earned amount:");
for (let item of items) {
    console.log(item.name + item.price);
    totalIncome += item.price;
}

console.log("\nIncome: $" + totalIncome);

let staffExpenses = Number(input("Staff expenses:\n"));
let otherExpenses = Number(input("Other expenses:\n"));

let netIncome = totalIncome - staffExpenses - otherExpenses;

console.log("Net income: $" + netIncome);

```
