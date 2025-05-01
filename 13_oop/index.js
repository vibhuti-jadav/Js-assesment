let obj =new Object()
console.log(obj)

class bike{
    constructor(name,model,price){
        this.name =name
        this.model=model
        this.price=price
    }

    print(){
        console.log("bike name is:"+this.name+",model is:"+this.model+",price is:"+this.price)
    }
}

const newBike=new bike("royal","model5",1500000)
newBike.print()



// let bike ={
//     name:"hunter",
//     model:"25",

//     print:function(){
//         console.log("bike name is:"+this.name+",model is:"+this.model)
//     }
// }



// let bike =new Object();

// bike.print()

// bike.name ="javaa"