class food{
    eating(item){
        this.item=item,
        console.log("eating  "+this.item)
    }
}

class gujrati extends food{

    eating(item){
        super.eating(item)
        console.log("eating  " + this.item)
    }
}

let golden = new gujrati()
golden.eating("food")