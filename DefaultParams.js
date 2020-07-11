// default params = [2, 3, 4]
function add(numArray = [2, 3, 4]) {
    let total = 0

    numArray.forEach(element => {
        total += element  
    })
    console.log(total)
}

//Nothing to fill the argument 
add()