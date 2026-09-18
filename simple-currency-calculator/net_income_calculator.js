const input = require('sync-input');

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

console.log("\nIncome: $" + totalIncome);

let staffExpenses = Number(input("Staff expenses:\n"));
let otherExpenses = Number(input("Other expenses:\n"));

let netIncome = totalIncome - staffExpenses - otherExpenses;

console.log("Net income: $" + netIncome);
