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

// case
function getCaseInputValue (isAddition){

    const caseInputValue = document.getElementById('case-number')
    const caseInputValueInText = caseInputValue.value
    const caseInputValueInNumber = parseInt(caseInputValueInText)
    if( isAddition == true ){
        caseInputValue.value = caseInputValueInNumber + 1
    }
    else if(caseInputValueInNumber > 0){
        caseInputValue.value = caseInputValueInNumber - 1
    }
    const casePrice = document.getElementById('case-price')
    const casePriceInText = casePrice.innerText
    casePriceInNumber = parseFloat (casePriceInText)
    casePrice.innerText = caseInputValue.value *59;
    }
  // case 
  document.getElementById('case-plus').addEventListener('click',function(){
    getCaseInputValue(true)
    calculateTotal ()
    })
    document.getElementById('case-minus').addEventListener('click',function(){
    getCaseInputValue(false)
    calculateTotal ()
    })
    
 // mobile 
       function getMobileInputValue (addition){
        const mobileInputValue=document.getElementById('mobile-number')
        const mobileInputValueInText =  mobileInputValue.value
        const mobileInputValueInNumber = parseInt(mobileInputValueInText)
        if( addition == true){
          mobileInputValue.value = mobileInputValueInNumber + 1
        }
        else if(mobileInputValueInNumber > 0){
         mobileInputValue.value = mobileInputValueInNumber - 1
        }
        const mobilePrice = document.getElementById('mobile-price')
        const mobilePriceInText = mobilePrice.innerText
        mobilePriceInNumber = parseFloat(mobilePriceInText)
        mobilePrice.innerText = mobileInputValue.value *1219
        }
 
// mobile
    
    document.getElementById('mobile-plus').addEventListener('click',function(){
    getMobileInputValue(true) 
    calculateTotal ()
    })
    document.getElementById('mobile-minus').addEventListener('click',function(){
    getMobileInputValue(false)
    calculateTotal ()
      
    })
    
