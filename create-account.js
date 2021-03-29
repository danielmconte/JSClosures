function createAccount(pin, amount) {
    let pinNum = pin;
    let balance = amount;
    return {
        checkBalance(pin){
            if(pin !== pinNum){
                console.log("Invalid Pin")
            }else{
                return balance;
            }
        },
        deposit(pin, amount){
            if(pin !== pinNum){
                console.log("Invalid Pin")
            }else{
                balance = balance + amount;
                return balance;
            }
        },
        withdraw(pin, amount){
            if(pin !== pinNum){
                console.log("Invalid Pin")
            }else{
                balance = balance - amount;
                return balance;
            }
        },
        changePin(pin, newPin){
            if(pin !== pinNum){
                console.log("Invalid Pin")
            }else{
                pinNum = newPin;
                return pinNum;
            }
        }
    }
}


