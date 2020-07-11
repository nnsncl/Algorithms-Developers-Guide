// If you don't know many inputs are getting back from a function,
// use the Rest Operator to store all of this inside an array

function add(...nums) {
    console.log(nums)
}
add(4, 5, 6, 7, 8)