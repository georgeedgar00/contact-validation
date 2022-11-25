'use strict';

// Utility functions
function onEvent(event, selector, callback){
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document){
    return parent.querySelector(selector);
}

const form = select('form');
const btn = select('.send');
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
const postalRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

function isValid(input){
    if(Number.isInteger(input)){
        return true;
    }

    return false;
}

function validate(){
    let firstName = select('.first-name').value.trim();
    let lastName = select('.last-name').value.trim();
    let age = select('.age').value.trim();
    let email = select('.email').value.trim();
    let postal = select('.postal-code').value.trim();

    let message ='';
    let valid = true;
    let count = 0;

    if (firstName.length === 0){
        message += 'First name is required\n';
        valid = false;
        count++;
    }
    if (lastName.length === 0){
        message += 'Last name is required\n';
        valid = false;
        count++;
    }
    if (age.length === 0){
        message += 'Age is required\n';
        valid = false;
        count++;
    } else if(!isValid(Number(age))) {
        message += 'A valid age is required\n';
        valid = false;
    }

    if (email.length === 0){
        message += 'Email is required\n';
        valid = false;
        count++;
    } else if(!emailRegex.test(email)){
        message += 'A valid email is required\n';
        valid = false;
    }

    if (postal.length === 0){
        message += 'Postal code is required\n';
        valid = false;
        count++;
    } else if(!postalRegex.test(postal)){
        message += 'A valid postal code is required\n';
        valid = false;
    }

    if(count === 5){
        alert('Fields with * are required');
    } else if (!valid){
        alert(message);
    } else {
        alert('Form submitted');
        // form.submit();
    }
}

onEvent('click', btn, function(){
    validate();
});