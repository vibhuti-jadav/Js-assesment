class parent{
    name="bike"
}

class child extends parent{

    show(){
        console.log(this.name)
    }
}

let bike=new child()
bike.show()