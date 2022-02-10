// case
function getInputValue (product,price,isAddition){

const inputValue = document.getElementById(product+'-number')
const inputValueInText = inputValue.value
const inputValueInNumber = parseInt(inputValueInText)
if( isAddition == true ){
    inputValue.value = inputValueInNumber + 1
}
else if(inputValueInNumber > 0){
    inputValue.value = inputValueInNumber - 1
}
const productPrice = document.getElementById(product+'-price')
const productPriceInText = productPrice.innerText
casePriceInNumber = parseFloat (productPriceInText)
productPrice.innerText = inputValue.value * price;
}

// case 
document.getElementById('case-plus').addEventListener('click',function(){
getInputValue('case',59,true)
calculateTotal ()
})
document.getElementById('case-minus').addEventListener('click',function(){
getInputValue('case',59,false)
calculateTotal ()
})

document.getElementById('mobile-plus').addEventListener('click',function(){
getInputValue('mobile',1219,true) 
calculateTotal ()
})
document.getElementById('mobile-minus').addEventListener('click',function(){
getInputValue('mobile',1219,false)
calculateTotal ()
})
// subtotal,tax,total
function calculateTotal (){

    const subTotal = document.getElementById('sub-total')
    const taxAmount = document.getElementById('tax-amount')
    const totalAmount = document.getElementById('total-amount')
    const mobilePrice = document.getElementById('mobile-price')
    const mobilePriceInText = mobilePrice.innerText
    const mobilePriceInNumber = parseFloat(mobilePriceInText)
    const casePrice = document.getElementById('case-price')
    const casePriceInText = casePrice.innerText
    const casePriceInNumber = parseFloat(casePriceInText)
    subTotal.innerText = mobilePriceInNumber + casePriceInNumber
    taxAmount.innerText = subTotal.innerText / 10
    totalAmount.innerText = parseFloat(subTotal.innerText) + parseFloat(taxAmount.innerText)
    } 

