"use strict";
class Customer {
    constructor(first, last) {
        this._firstName = first;
        this._lastName = last;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let cust = new Customer("nirvan", "madapala");
console.log(cust.firstName);
console.log(cust.lastName);
