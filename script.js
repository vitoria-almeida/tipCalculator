let calculate = document.getElementById('calculate_btn')

let percentage5 = document.getElementById('percentage_5')
let percentage10 = document.getElementById('percentage_10').value = 10
let percentage15 = document.getElementById('percentage_15').value = 15
let percentage25 = document.getElementById('percentage_25'). value = 25
let percentage50 = document.getElementById('percentage_50'). value = 50
let percentage100 = document.getElementById('percentage_100').value = 100

let billAmount = document.getElementById('bill_Amount')
let totalPerson = document.getElementById('total_Person')

let tipAmountPerson = document.getElementById('tipAmountPerson')
let totalperson = document.getElementById('totalPerson')


percentage5.addEventListener('click', function(){
    if (totalPerson.value < 1) {
        alert('Preecha a quantidade de pessoas!')
    } else {
        percentage5.style.backgroundColor = 'red'

        totalTip5 = 5 * billAmount.value / 100 
        totalTip5Person = totalTip5 / totalPerson.value
        total5 = ((+billAmount.value) + (+totalTip5))/totalPerson.value
    
        tipAmountPerson.innerHTML = `R$ ${totalTip5Person.toFixed(2)}`
        totalperson.innerHTML = `R$ ${total5.toFixed(2)}`   
    }
})


calculate.addEventListener('click', function(){
    // let billAmount = document.getElementById('bill_Amount').value   
})


