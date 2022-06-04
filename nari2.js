function fullname(name1,name2,name3,name4) {

    console.log(name1);
    console.log(typeof name2);
    console.log(name3);
    console.log(name4);

console.log(name1.role&&name2.role1&&name3.role2&&name4.role3);
    
    if(name1.role=="clerk"&&name2.role1=="officer"){
        console.log(name1.role+""+name2.role2);
        var y =name1.role+""+name2.role1
    }
    else if(name1.branch=="tirupathi"&&name2.branch=="pileru"){
        console.log(name1.branch+""+name2.branch);
        var y =name1.branch+""+name2.branch
    }

if (name3.role2==="watchman"&&name4.role3==="bosch") {
    console.log(name3.contactnum+""+name4.contactnum);
    var y =name3.contactnum+""+name4.contactnum

    
}
else if(name3.street==="balaji colony"&&name4.street==="bosch"){
    console.log(name3.street+""+name4.street);

    var y =name3.street+""+name4.street

}


return y;   
}

var x= fullname({
    role:"clerk",
    brach:"tirupathi",
    contactnum:9123489412,

    address:{
        street:"balaji colony",
        landmark :"near circle"
    }
},{
    role1:"officer",
    branch:"pileru",
    contactnum:9123456789,

    address:{
        street:"chennareddy colony",
        landmark:"oppiste to sv mahal"
    }
},{
    role2:"watchman",
    branch:"madhanapalli",
    contactnum:9652394125,

    address:{
        street:"king's colony",
        landmark:"opposite pc station"
    }
},{
    role3:"manager",
    branch:"kukatapallli",
    contactnum:79893731787,

    address:{
        street:"bosch",
        lnadmark:"clock tower",

    }
},);

let d= fullname(2,3,4,5);

console.log(x);

console.log(d);