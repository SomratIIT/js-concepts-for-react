const student = {
    name:'Somrat',
    age:24,
    movies: ['Squid Game','Venom:Last Dance']
}
const studentJSON = JSON.stringify(student); 
// console.log(student);
// console.log(studentJSON);

const againObject = JSON.parse(studentJSON);
// console.log(againObject);

/* Fetch */
fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(data=>console.log(data));
