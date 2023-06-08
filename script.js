// Declaration: e.g let screen -- Creates a space in memory called 'Screen'
// Assigment: Data put in to the space created by the declaration e.g " WELCOME TO DREAM BIG BANK" is placed/stored in that space in memory called 'Screen'

const title = document.querySelector('.title')
console.log(title)
// title.innerText = 'gah' === telling the title to change it's inner text to the string gah

const amount = document.querySelector('.amount')
console.log(amount)

// LeftButtons
const withdrawalButton = document.querySelector('.withdrawal')
const depositButton = document.querySelector('.deposit')
const resetButton = document.querySelector('.reset')

// RightButtons
const balanceButton = document.querySelector('.balance')
const fastCashButton = document.querySelector('.fastCash')
const transferButton = document.querySelector('.transfer')

//Key Pad

const keys = document.querySelectorAll('.keyPadFrame button')
// console.log(keys)
// keys.forEach((key) => {
//     console.log(key.innerText)
// })

const cancelButton = document.querySelector('.cancel')
const clearButton = document.querySelector('.clear')
const helpButton = document.querySelector('.help')
const enterButton = document.querySelector('.enter')

const alertHelp = () => {
    alert('Help is on the way')
}

const clearAmount = () => {
    amount.innerText = ""
}







