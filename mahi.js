// creating of object directly (using new key word)//
var emp = new Object();

emp.id =112233;
emp.name ="mahendra" ;
emp.salary =25000;
emp.bloodgroup ="b+ve";
emp.role ="senior software devloper";

console.log(emp);
console.log(emp.id);
console.log(emp.name);
console.log(emp.salary);
console.log(emp.bloodgroup);
console.log(emp.role);

console.log(emp.id,"",emp.name,"",emp.salary,"",emp.bloodgroup,"",emp.role);




//computed acess//

var mahi =new Object();

mahi["color"]='white';
mahi["height"] ="175cm";
mahi["weight"] =61;
mahi["favfood"] ="halwa";

console.log(mahi["color"]);
console.log(mahi["height"]);
console.log(mahi["weight"]);
console.log(mahi["favfood"]);



//objects literal//

let address ={
    'building no': 3/367,
    street :"bandala veedhi",
    post : "pallam gadda",
    mandal :"k.v palli",
    district :"chittoor",
};

console.log(address);


console.log(address["building no"]);
console.log(address.street);
console.log(address.post);
console.log(address.mandal);
console.log(address.district);

//nested objects//

var person ={
    "first name"  :"bukke",
    "middle name" :"mahendra",
     last         :"naik",
     age          :26,
 address          :{
     village      :"basanagarri palle" ,
     city         :"pileru" ,
     district     :"chittoor",
     state        :"andhra pradesh" ,
     "pin no"     :517213,
 }


};
    console.log(person);


















