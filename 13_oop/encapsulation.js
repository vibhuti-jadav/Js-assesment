class reg{

    constructor(){
        this.name="vibhuti"
        this.pass="vibhu24"
        this.balance;
    }

    login(name,pass){
        if(this.name == name && this.pass ==pass){
            console.log("login successfully....!")
        }
        else{
            console.log("invalid information...!")
        }
    }
}

const user = new reg()

user.login("vibhuti","vibhu24")

class Array
{
    constructor(){
        return[]
    }
}

let obj = new Object()
let arr = new Array()

console.log(arr)