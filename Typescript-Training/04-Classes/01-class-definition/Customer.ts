class Customer{

   private _firstName: String;
   private _lastName: String;

    public get firstName(): String {
        return this._firstName;
    }
    public set firstName(value: String) {
        this._firstName = value;
    }
  
    public get lastName(): String {
        return this._lastName;
    }
    public set lastName(value: String) {
        this._lastName = value;
    }

    constructor (first:String,last:String){
        this.firstName=first;
        this.lastName=last;
    }
    

}

let cust= new Customer("girbabu","madapala");

console.log(cust.firstName);
console.log(cust.lastName);



