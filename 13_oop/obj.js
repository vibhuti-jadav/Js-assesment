// let obj = {
//     name : "vidhya",
//     post : "classmet",
//     age : 22
// }

// console.log(obj)


// let obj1 = new Object("rahul", "teacher", 30)
// console.log(obj1.name, obj1.post, obj1.age)


// class Object {
//     constructor(name, post, age){
//         this.name= name
//         this.post = post 
//         this.age = age 
//     }
// }


// let obj = new Object("nirali", "faculty", 20)

// console.log(obj)

// let obj1 = new Object("hitanshi", "freind", 18)

// console.log(obj1)



// let bigObj = {
//     one: 1
// }


// let smallObj =  bigObj;

// smallObj.one = 2;
// console.log(smallObj)



// let str = "vihbuti"

// str.includes("u")


class includ{
    constructor(str){
     return  this.str = str;
    }

    includes(char){
        for(let i=0; i<this.str.length; i++){
            if(this.str[i] == char)
            {
                return true;
            }
          
        }
        return false
    }


    charAt(index){
            return this.str[index]
    }

}
  
let inc = new includ("vibhuti")
console.log(inc.includes("u"))
console.log(inc.charAt(4))