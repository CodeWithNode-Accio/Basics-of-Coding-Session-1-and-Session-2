// let P, R, T 

// Si 
// Ci

// si = P*R*T/100 


// amt = p(1+r/100)^t
// ci = amt - p

let p = 100000 
let r = 10 
let t = 5 


let si = p*r*t/100 

let amt = p*(1+r/100)**t

let ci = amt - p

console.log(si)

console.log(ci)