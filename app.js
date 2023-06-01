// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}
const fromEuroToDollar =(euro)=> {
    let dollar= euro*1.2
    return dollar
}
const fromDollarToYen =(dollar)=> {
    let yen= dollar*139.8
    return yen
}
const fromYenToPound =(yen)=> {
let pound= yen*0.0057
return pound
}

// just a console log for ourselves.
console.log(sum(7,3))
console.log(fromEuroToDollar(7))
// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum,fromEuroToDollar,fromDollarToYen, fromYenToPound };