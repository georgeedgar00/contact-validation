'use strict';

class Contact {
    #name;
    #city;
    #email;

    constructor (name, city, email) {
        this.name = name;
        this.city = city;
        this.email = email;
    }

    getName() {
        console.log(getName())
        if(city.length > 1) {
            this.#city = city;
            return this.#name;
        } else {
            throw new TypeError('City is not valid');
        }
    }
    
    getCity() {
        if(email.length > 0) {
            this.#email = email;
            return this.#city;
        } else {
            throw new TypeError('Email is not valid');
        }
    }

    getEmail() {
        if(email.length > 0) {
            this.#email = email;
            return this.#email;
        } else {
            throw new TypeError('Email is not valid');
        }
    }
    
    getInfo() {
        return `Name: ${this.name}\nCity: ${this.city}\nEmail: ${this.email} `;
    }
}

export { Contact }