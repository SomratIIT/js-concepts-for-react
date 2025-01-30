/* const numbers = [10,20,30,40];
numbers[0]=99;
console.log(numbers);
numbers.push(22);
console.log(numbers);
numbers.pop();
console.log(numbers);

for(const number of numbers)
{
    console.log(number);
} */

/* const multiply = (a,b) =>{
    return a*b;
}
const answer = multiply(10,10);
console.log(`value is = ${answer}`); */

//for (const pro of products){
  //  console.log(pro.name);

// const b = products.map(p=>p.brand);
 //const overprice = products.forEach(ov =>console.log(ov.price));
// const overprice = products.filter(ovr =>ovr.price);
// console.log(b);

const products = [
    {name:'laptop',price: 32000, brand :'lenovo',color: 'Silver'},
    {name:'phone',price: 7000, brand :'iphone',color: 'golden'},
    {name:'car',price: 132000, brand :'BMW',color: 'Black'},
    {name:'phone',price: 3000, brand :'realme',color: 'White'},

];


const custom = products.filter(p=> p.name !== 'phone');
console.log(custom);
/* const newProducts = [...products,{name:'somrat',price: 4000, brand :'realme',color: 'brown'}]
console.log(newProducts);

const nkheli = newProducts.map(p=>p.name);

console.log(nkheli);
const pkheli = newProducts.forEach(p=>console.log(p.name));
const bkheli = newProducts.filter(p=>p.name.includes('s'));

console.log(bkheli); */