// // creating of object directly (using new key word)//
// var emp = new Object();

// emp.id =112233;
// emp.name ="mahendra" ;
// emp.salary =25000;
// emp.bloodgroup ="b+ve";
// emp.role ="senior software devloper";

// console.log(emp);
// console.log(emp.id);
// console.log(emp.name);
// console.log(emp.salary);
// console.log(emp.bloodgroup);
// console.log(emp.role);

// console.log(emp.id,"",emp.name,"",emp.salary,"",emp.bloodgroup,"",emp.role);




// //computed acess//

// var mahi =new Object();

// mahi["color"]='white';
// mahi["height"] ="175cm";
// mahi["weight"] =61;
// mahi["favfood"] ="halwa";

// console.log(mahi["color"]);
// console.log(mahi["height"]);
// console.log(mahi["weight"]);
// console.log(mahi["favfood"]);



// //objects literal//

// let address ={
//     'building no': 3/367,
//     street :"bandala veedhi",
//     post : "pallam gadda",
//     mandal :"k.v palli",
//     district :"chittoor",
// };

// console.log(address);


// console.log(address["building no"]);
// console.log(address.street);
// console.log(address.post);
// console.log(address.mandal);
// console.log(address.district);

// //nested objects//

// var person ={
//     "first name"  :"bukke",
//     "middle name" :"mahendra",
//      last         :"naik",
//      age          :26,
//  address          :{
//      village      :"basanagarri palle" ,
//      city         :"pileru" ,
//      district     :"chittoor",
//      state        :"andhra pradesh" ,
//      "pin no"     :517213,
//  }


// };
//     console.log(person);




// oprator precedence and associativity // :-

//java script evaluates an expression according to a predefined order of precedence operator with higher-
//precedence is evaluated first.//

// ***the one with the larger number executes first***


// the operator associativity defines,if two or more operators with the same level of precedence appear in an expression-
// which one  will be evaluated first.


// examples//

//addition and subtraction //


var x = 10+5-4;

console.log(x); //result will be 11//

var y = 10-5+4; // here 9//

var y1 = 10-4+5; //here 11//

console.log(y); 
console.log(y1);


// multiply and division //

var a =15*9/3;
console.log(a); // o/p is 45 //

var b =15/3*9; //here also 45//
console.log(b);


//*by using parenthesis ()*//

var c = 20+5*3; //35//

var c1 =(20+5)*3; //75/

console.log(c,c1);


var d =20-5/3;    //18.333333333333332//

var d1 =(20-5)/3;  //5/

console.log(d,d1);

// other operators //

var a=4;
var b= 10+ a++;

console.log(b);



let f =12;
let g =23;

sum=(f+g);
console.log(sum); //35//

subtraction =(f-g);
console.log(subtraction); //-11//

mul =(f*g);
console.log(mul); //276//



//example//


a=3;
b=5;
c=7;

t= a<b<c;           //true//

u= a>b<c;           //true//

v= a<b==c;         //false//

w= c*a==b;         //false//

x= a=b=c;          //7//

y=[a]+[b]+[c];  //777//

z= a<<b<<c;      //114688//

l= a>>b>>c;       //0//

m= a<=b<=c;       //true//

n= a>=b>=c;      //false//

o= a==b==c;     //false//

p= a&&b&&c;     //7//


console.log(t);
console.log(u);
console.log(v);
console.log(w);
console.log(x);
console.log(n);
console.log(p);

//example//

let last =10+20/10-30*20+(20+20-20*20/10);

//evaluating process//
//(20+20-400/10)
//(40-40)
//-30*20=-600
//10+20/10 =10+2=12
//12-600+0
//-588 .    //o/p -588//
console.log(last);




