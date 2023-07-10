// receive data from the server 
let data = `{
    "name":"mayank",
    "age": 25,
    "is-student": true,
    "passport-no.":null,
    "lang":["js","css","html"],
    "address" :{
        "city": "rohini",
        "state":"delhi",
        "pincode": 110085
    }
}`

let dataobject = JSON.parse(data)

console.log(dataobject.address)

console.log(dataobject[`address`])
// we can access by both the way 
   

//SEND DATA  TO SERVER

let student = {
    name:"mayank",
    age:23,
    city:"delhi "
}
 let serverstudent = JSON.stringify(student)
 console.log(serverstudent)