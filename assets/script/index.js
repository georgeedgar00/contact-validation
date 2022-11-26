import {onEvent, select, selectAll, create, log} from './utils.js';
import {Contact} from "./contact.js";

const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
const nameRegex = /^[a-zA-Z ]{2,30}$/;
const cityRegex = /^(?:[A-Za-z]{2,}(?:(\.\s|'s\s|\s?-\s?|\s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$/;

const add = select('.create-btn');
const parent = select('.contact-page');
const contactInfo = select(".contact-input");
const contactCounter = select('.num-contact p')
const errorOutput = select('.message')

/*****************************************
        Creating new Contact
*****************************************/
function newContact(name, city, email) {
    const createContact = new Contact(name, city, email)
    return createContact
};


/*****************************************
        Building Contact
*****************************************/

// Empty array
const arr = []

function createContact(obj){
   
    const contactInput = contactInfo.value.split(', ');

    if(contactInfo.value == '') {
        errorOutput.innerText = 'Enter the fields above!'
    } else {
        let contactDiv = create('div');
        contactDiv.className = 'contact';
        parent.prepend(contactDiv);
        arr.push(obj)
        contactCounter.innerText = `Contacts: ${arr.length}`
        errorOutput.innerText = 'Contact Created!';

        // Delete contact
        contactDiv.onclick = function() {
            contactDiv.remove()
            contactCounter.innerText = `Contacts: ${arr.length -= 1}`
        }
        contactDiv.innerText = `Name: ${contactInput[0]}\nCity: ${contactInput[1]}\n Email: ${contactInput[2]}`
    }
}


/*****************************************
        Assigning new Contact
*****************************************/

function assignContact(){
        if(contactInfo.value !== ''){
            const contactInput = contactInfo.value.split(', ');

            // Email Validation
            if(!emailRegex.test(contactInput[2])){
                errorOutput.innerText = 'Email is not valid. Delete and try again.'
            }else if (!cityRegex.test(contactInput[1])) {
                errorOutput.innerText = 'City is not valid. Delete and try again.'
            } else if(!nameRegex.test(contactInput[0])){
                errorOutput.innerText = 'Name is not valid. Delete and try again.'
                
            }
        } else {
            errorOutput.innerText = 'Full Name, City and Email are required.';
        }

}

/*****************************************
        onEvent add
*****************************************/

onEvent('click', add, function(){
    event.preventDefault(assignContact(createContact(newContact(contactInfo.value))))
})