// Declaration: e.g let screen -- Creates a space in memory called 'Screen'
// Assigment: Data put in to the space created by the declaration e.g " WELCOME TO DREAM BIG BANK" is placed/stored in that space in memory called 'Screen'

const title = document.querySelector('.title')
console.log(title)
// title.innerText = 'gah' === telling the title to change it's inner text to the string gah

// const amount = document.querySelector('.amount')
// console.log(amount)
//  amount.innerHTML = `FCFA`

// =========== {Left Intruction Buttons} -- Selecting the elements from the DOM(HTML tags) and creating fxns to make the elements functional.
    //How to make the Withdrawal button functional
       //  1) First Select element(s) from the DOM (HTML tags) that needs to be updated when app is in use.
// let screen = document.querySelector('.screen')
let amount = document.querySelector('.amount')
const withdrawalButton = document.querySelector('.withdrawal')
      //2) Declare a function that makes the withdrawal button functional when clicked ; using the addEventListener() method, and Function Declaration, for this button.

withdrawalButton.addEventListener('click', function() {
    const displayWithDrawalAmount = prompt('How much do you want to withdrawal from your account ?')
    amount.innerText = displayWithDrawalAmount 
})
    // console.log(displayWithDrawalAmount)

//How to make the Deposit button functional
        //  1) First Select element(s) from the DOM (HTML tags) that needs to be updated when app is in use.
const depositButton = document.querySelector('.deposit')
        //2) Declare a function that makes the Deposit button functional when clicked ; using the addEventListener() method, and  Arrow Function, for this button. 
depositButton.addEventListener("click",  displaydepositAmount = () => {
const depositAmount = prompt("How much do you want to add to your Account")
amount.innerHTML = depositAmount 
} )
//alert('You just Added (depositAmount) to your Account')
console.log(displaydepositAmount)

//How to make the Reset button functional
         //  1) Select element(s) from the DOM (HTML tags) that needs to be updated when app is in use.
const resetButton = document.querySelector('.reset')
         //2) Declare a function  that makes the RESET button functional when clicked ; using the reload() method for this button. i.e //To avoid clicking the refresh button to reload your app or page, use the reload() method  and then passing as argument, the button name you want to use as the refesh button.
const returnToScreen = () => {
       location.reload(resetButton)
}
 console.log(returnToScreen)

//========== {Right Instruction Buttons}
  //How to make the Balance button functional
         //  1) Select elements from the DOM (HTML tags)
const balanceButton = document.querySelector('.balance')
        //2) Declare a function that makes the Deposit button functional when clicked ; using the Arrow Function and the HTML onClick() method for this button.
        // let withdrawal = " ";
        // let currentAmount = " ";
        // let newAmount = currentAmount- withdrawal;  
const checkBalance = () => {
    const newbalance = 'Your Balance is ___';
amount.innerText = newbalance

};
 console.log(checkBalance)

const fastCashButton = document.querySelector('.fastCash')
const transferButton = document.querySelector('.transfer')

// -------Key Pad
  //Testing to make sure all keys on key pad can be displayed in the console
const keys = document.querySelectorAll('.keyPadFrame button')
console.log(keys)
keys.forEach((key) => {
    console.log(key.innerText)
})

// KeyPadButtons -- Selecting the elements from the DOM(HTML tags) and creating fxns to make the elements functional
// const amount = document.querySelector('.amount')
// const helpButton = document.querySelector('.help')
const cancelButton = document.querySelector('.cancel')
const enterButton = document.querySelector('.enter')

// How to clear amount from screen
     //1) First select element(s) to be updated ( in this case; (i) class name "amount" from p tag and (ii) class name "clear" from div class "row2")
amount = document.querySelector('.amount')
console.log(amount)
const clearButton = document.querySelector('.clear')
console.log(clearButton)
    //2)Now declare a function that makes the CLEAR button functional when clicked ; using the addEventListener() method, and Function Declaration, for this button.
clearButton.addEventListener("click", function () {
    amount.innerHTML = " "
    const currencyOfChoice = prompt('Which Currency Do You Want?');
    amount.innerHTML = "<p> AMOUNT IN " + currencyOfChoice + "</P>"
})

// How to make the HELP button functional
   //1) First select element(s) to be updated ( in this case; class name "help" from div class "row3")
const helpButton = document.querySelector('.help')
     //2)Now declare a function that makes the HELP button functional when clicked,for this button, the alert function is being used.
const alertHelp = () => {
        alert('Help is on the way')
}

// How to make the  buttons on the ATM KeyPad functional ( i.e Clickable)
    //1) First select element(s) to be updated ( in this case; class name "help" from div class "row3")
let screen = document.querySelector('.screen')
    //2)Now declare a function that makes each button appear on the screen when clicked;for this buttons, the append() method is being used.
const upLoadToScreen = (number) => {
    screen.append(number)
}









