import {onEvent, select, selectAll, create, log} from './utils.js';
import {Contact} from "./contact.js";

const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const cityRegex = /^(?:[A-Za-z]{2,}(?:(\.\s|'s\s|\s?-\s?|\s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$/;

const add = select('.create-btn');
const parent = select('.contact-page');
const contactInput = select(".contact-input");
const contactCounter = select('.num-contact p')
const errorMessage = select('.message')


function newContact(name, city, email) {
    const createContact = new Contact(name, city, email)
    return createContact
};



const arr = []

function makeContact(obj){
   
    const contactInput = contactInput.value.split(', ');

    if(contactInput.value == '') {
        errorMessage.innerText = 'Enter the fields above!';
    } else {
        let contactDiv = createElement('div');
        contactDiv.className = 'contact';
        parent.prepend(contactDiv);
        arr.push(obj)
        contactCounter.innerText = `Contacts: ${arr.length}`
        errorMessage.innerText = 'Contact Created!';

        contactDiv.onclick = function() {
            contactDiv.remove()
            contactCounter.innerText = `Contacts: ${arr.length -= 1}`
        }
        contactDiv.innerText = `Name: ${contactInput[0]}, City: ${contactInput[1]}, Email: ${contactInput[2]}`
    }
}




onEvent('click', add, function(){
    event.preventDefault(makeContact(newContact(contactInput.value)))
})