class bank{
    constructor(username, password){
        this.username = username
        this.password = password 
        this.balance = 0
    }


    deposite(username, password, balance){
            if(this.username==username && this.password ==password)
            {
                this.balance += balance
            }
            else{
                console.log("invalide information...!")
            }
    }


    show(username, password){
            if(this.username==username && this.password ==password)
            {
                console.log("balance: ", this.balance)
            }
            else{
                console.log("invalide information...!")
            }
    }

    widraw(username, password, balance){
            if(this.username==username && this.password ==password)
            {

                if(this.balance < balance){
                    console.log("inserficiant balance...!")
                }
                else{
                    this.balance -= balance
                    console.log("widrawal : ", balance)
                    console.log("current bal : ", this.balance)
                }
               
            }
            else{
                console.log("invalide information...!")
            }
    }




}
let User1 = new bank("vibhuti", 12345)


User1.deposite("vibhuti", 12345, 1500)
User1.deposite("vibhuti", 12345, 100)


// User1.show("vibhuti", 12345)


User1.widraw("vibhuti", 12345, 1800)


let User2 = new bank("vidhya", 45678)

User2.show("vidhya", 45678)
User2.deposite("vidhya", 45678, 10000)
User2.show("vidhya", 45678)