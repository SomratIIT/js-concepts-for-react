// map+forEach+filter+find

const products = [
    {name:'laptop',price: 32000, brand :'lenovo',color: 'Silver'},
    {name:'phone',price: 7000, brand :'iphone',color: 'golden'},
    {name:'car',price: 132000, brand :'BMW',color: 'Black'},
    {name:'phone',price: 3000, brand :'realme',color: 'White'},

];

const brands = products.map(p =>p.brand);
//console.log(brands); 
const prices = products.forEach(p => {
  //  console.log(p.price);
});

const lowPrice = products.filter(p=>p.price<5000)
//console.log(lowPrice);
const searchletter = products.filter(product=>product.name.includes('a'));

//console.log(searchletter);

const searchnew = products.find(product=>product.name.includes('a'));
// console.log(searchnew);