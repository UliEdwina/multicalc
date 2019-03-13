/*
# ========================================================
# = Initialization
# ========================================================
*/

// global array
let numbers = [];

// When the window loads, set up event listeners
window.onload = init;

// Sets up event listeners
function init() {

    // When the user clicks the append button, append the given number to the list.
    document.querySelector('#append')
        .addEventListener('click', appendToList);

    // When the user clicks the remove button, remove the number at the index given from the list.
    document.querySelector('#remove')
        .addEventListener('click', removeFromList);

    // When the user clicks the clear button, remove all items from the list.
    document.querySelector('#clear')
        .addEventListener('click', clearList);

    // When the user clicks the add button, add the value to each item.
    document.querySelector('#add')
        .addEventListener('click', addToAll);

    // When the user clicks the add button, add the value to each item.
    document.querySelector('#subtract')
        .addEventListener('click', subtractFromAll);
        
    // When the user clicks the multiply button, multiply the value by each item.
    document.querySelector('#multiply')
        .addEventListener('click', multiplyByAll);
        
    // When the user clicks the divide button, divide the value from each item.
    document.querySelector('#divide')
        .addEventListener('click', divideFromAll);
}

/*
# ========================================================
# = List Management
# ========================================================
*/

// Append to the list.
function appendToList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the value we're going to append from the input field.
   // let number = document.querySelector('#list-number').value;

    // Append the number to our array.
    let number = parseInt(document.querySelector('#list-number').value);

    // Hint: here (and elsewhere), watch the TYPE of the value above.
    // Research `typeof` operator if you're not sure.
    // Update our html.

    if (isNaN(number) === true ){
        document.getElementById('number-list').innerHTML = "please enter a number";
    } else{
        numbers.push(number);
        console.log(numbers);
        addToUL(number);
        
    }
    
}
// Remove from the list.
function removeFromList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Get the index we'll remove from the input field.
    const index = document.querySelector('#number-list').value;
    console.log(index)
    // Remove the number at that index from the list.
    //for( let i = numbers.length-1; i--;){
     //   if ( numbers[i] === 1) {
         numbers.splice(0, 1);
      //  console.log(numbers)
        
      //  }
    //}
    /*
        ### Hints:

        * You can either loop through... or use array methods. Check out concat!

        * Either way, though, we've declared out array using `let` this time,
        and reassigning the array is probably the best approach with our current
        tools.
    */

    // Update our html.
    updateUL();
   

}

function clearList(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    let num = [];
    numbers = num;
    // Clear the array of all values.

    
    // Update our html.
    updateUL();
}

/*
# ========================================================
# = Math Section
# ========================================================
*/


function addToAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    //let numberToAdd = parseInt(document.querySelector('#number-for-math').value);
    //console.log(typeof numberToAdd)
    // Add value to everything on the list.
   for (i = 0; i < numbers.length; i++){
       // typeof(numbers[0]+ numberToAdd);
       if (typeof numbers !== 'number'){
           let numberToAdd = parseInt(document.querySelector('#number-for-math').value);
         console.log(numbers[i] + numberToAdd); 
         
       }
    // Update our html.
    updateUL();  
}

}
function subtractFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to add.
    let numberToSubtract = parseInt(document.querySelector('#number-for-math').value);
    
    // Add value to everything on the list.
  

    // Update our html.

}

function multiplyByAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();
    
    // Grab value to add.
    let numberToMultiply = document.querySelector('').value;
    
    // Add value to everything on the list.
    
    
    // Update our html.
    
}

function divideFromAll(event) {
    // Make sure page doesn't reload on button press.
    event.preventDefault();

    // Grab value to add.
    let numberToDivide = document.querySelector('').value;

    // Divide value from everything on the list.
    

    // // Update our html.plo
    
}


/*
# ========================================================
# = HTML Management
# ========================================================
*/

function updateUL() {
    clearUL();
    for(let i = 0; i < numbers.length; i++) {
        addToUL(numbers[i]);
    }
}

function clearUL() {
    const ul = document.querySelector('#number-list');
    while(ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}

// Append to the UL.
function addToUL(numberToAppend) {
    const ul = document.querySelector('#number-list');
    const newLI = document.createElement('li');
    newLI.innerText = numberToAppend;
    ul.appendChild(newLI);
    console.log(numberToAppend);
}
