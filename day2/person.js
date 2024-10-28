//declare person array object with 5 records
//person should have prop name age and city
//print all the records where age is greater than 25
//print all the records where city is New York
//print all the records where name starts with S

// Declare an array of person of 5 objects
const persons = [
    { name: 'Rubi', age: 50, city: 'Delhi' },
    { name: 'Smita', age: 23, city: 'New York' },
    { name: 'Abhi', age: 75, city: 'New York' },
    { name: 'Sachin', age: 46, city: 'London' },
    { name: 'Sweta', age: 41, city: 'New York' }
];

// Print all records where age is greater than 25
const tempPerson = persons.filter(person => person.age > 25);
console.log(tempPerson);
for(const p of tempPerson){
   document.getElementById("mydiv1").innerHTML += p.name+" "+p.age+" "+p.city+"<br>";
}

// Print all records where city is New York
const city = persons.filter(person => person.city == 'New York');
console.log(city);
for(const p of city){
    document.getElementById("mydiv2").innerHTML += p.name+" "+p.age+" "+p.city+"<br>";
}

// Print all records where name starts with S
const name1 = persons.filter(person => person.name.startsWith('S'));
console.log(name1);
for(const p of name1){
    document.getElementById("mydiv3").innerHTML += p.name+" "+p.age+" "+p.city+"<br>";
}