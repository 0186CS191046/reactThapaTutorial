function add(a,b){
    let addition = a+b 
    return addition
}

function sub(a,b){
   let  subtraction = a-b 
    return subtraction
}

function mul(a,b){
   let  multiple = a*b 
    return multiple
}

function div(a,b){
    let division = a/b 
    division = division.toFixed(2)
    return division
}

export default add;
export {sub,mul,div}