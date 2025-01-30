const num1 = 1998;
console.log(num1);
// Number to String
const modnum = num1 +'';
console.log(`Roll is ${modnum}`);

// String to Number

const  againnumber = +modnum;
console.log(againnumber);
const check = 12;

const answer= check>10 ? 'Boro' : 'choto';
console.log(answer);
const istrue = true;
const showuser = () =>{
    console.log('display user');
}
const hideuser = () =>{
    console.log('hide user');
}
istrue ? showuser():hideuser();