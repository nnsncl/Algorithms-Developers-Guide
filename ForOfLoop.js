let fullName = 'Nu Niki'
for (const char of fullName) {
    console.log(char);
}

let incomes = [62000, 67000, 75000]
for (let eachIncome of incomes) {
    eachIncome += 5000
   console.log(eachIncome)
   // By default, For of doesn't return the iterable value out of it's scope.
}
console.log(incomes)