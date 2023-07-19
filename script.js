// Declaration: e.g let screen -- Creates a space in memory called 'Screen'
// Assigment: Data put in to the space created by the declaration e.g " WELCOME TO DREAM BIG BANK" is placed/stored in that space in memory called 'Screen'

const title = document.querySelector('.title')
console.log(title)
// title.innerText = 'gah' === telling the title to change it's inner text to the string gah

// const amount = document.querySelector('.amount')
// console.log(amount)
//  amount.innerHTML = `FCFA`

// =========== {LeftButtons} -- Selecting the elements from the DOM(HTML tags) and creating fxns to make the elements functional.
    //How to make the Withdrawal button functional
       //  1) First Select element(s) from the DOM (HTML tags) that needs to be updated when app is in use
let amount = document.querySelector('.amount')
const withdrawalButton = document.querySelector('.withdrawal')
      //2) Declare function  
let withdrawal= ""
const displayWithDrawalAmount = () => {
    amount.innerText = withdrawal
    alert('Your haven taken out withdrawal from your account')
    // display(withdrawal)
    // withdrawalButton.addEventListener(onclick,displayWithDrawalAmount )
}
console.log(displayWithDrawalAmount)

     //How to make the Deposit button functional
        //  1) First Select element(s) from the DOM (HTML tags) that needs to be updated when app is in use
const depositButton = document.querySelector('.deposit')
        //2) Declare function 
        depositButton.addEventListener("click",  displaydepositAmount= () => {
            console.log("You Just Added deposit to your Account")
        } )

//  let deposit= ""
// const displaydepositAmount = () => {
//     // display(deposit)
//     depositButton.addEventListener("onclick",displaydepositAmount )
//     alert('You just Added deposit to your Account')
// }
// console.log(displayWithDrawalAmount)

     //How to make the Reset button functional
         //  1) Select element(s) from the DOM (HTML tags)
const resetButton = document.querySelector('.reset')
         //2) Declare function
const returnToScreen = () => {
       location.reload(resetButton)
}
 console.log(returnToScreen)

//========== {RightButtons}
  //How to make the Balance button functional
         //  1) Select elements from the DOM (HTML tags)
const balanceButton = document.querySelector('.balance')
        //2) Declare function 
        let newAmount = amount - withdrawal    
const checkBalance = () => {
amount.innerText = newAmount
alert('Your Balance is newAmount')
}
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
    //2)Now declare a function that makes the CLEAR button functional when clicked
const clearAmount = () => {
amount.innerText = ""
}

// How to make the HELP button functional
   //1) First select element(s) to be updated ( in this case; class name "help" from div class "row3")
const helpButton = document.querySelector('.help')
     //2)Now declare a function that makes the HELP button functional when clicked, In this app, the alert function is being used.
const alertHelp = () => {
        alert('Help is on the way')
}

// How to make the  buttons on the ATM KeyPad functional ( i.e Clickable)
//1) First select element(s) to be updated ( in this case; class name "help" from div class "row3")
let screen = document.querySelector('.screen')

const upLoadToScreen = (number) => {
    screen.append(number)
}


//===================================
// const btn1 = document.querySelector(".btn1");
// btn1.addEventListener('onClick',  displayButton1 (() => {
//     amount.innerHTML = 1 
// }))
// console.log(displayButton1)









