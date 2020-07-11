let example1 = [1, 2, 3, 4, 5, 6]
let example2 = [0, ...example1]
example2.push(true)

// Requires Babel to push objects and spread operator
// example2.push({
//     name: 'name'
//     ...example1
// })

console.log(example2)