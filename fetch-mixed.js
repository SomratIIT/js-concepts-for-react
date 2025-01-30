/* const student = {
    name:'Somrat',
    age:24,
    movies: ['Squid Game','Venom:Last Dance']
}
const studentJSON = JSON.stringify(student); 
 console.log(student);
 console.log(studentJSON);
 
const againObject = JSON.parse(studentJSON);
 console.log(againObject); */


 fetch('https://jsonplaceholder.typicode.com/users')
 .then(res => res.json())
 .then(data =>tryf(data))


 const tryf = data =>{

 data.map(data=>{
    console.log(data.id);
})
 }
