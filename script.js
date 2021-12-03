let percentage5 = document.getElementById('percentage_5')
let percentage10 = document.getElementById('percentage_10')
let percentage15 = document.getElementById('percentage_15')
let percentage25 = document.getElementById('percentage_25')
let percentage50 = document.getElementById('percentage_50')
let percentage100 = document.getElementById('percentage_100')

let billAmount = document.getElementById('bill_Amount')
let totalPerson = document.getElementById('total_Person')

let tipAmountPerson = document.getElementById('tipAmountPerson')
let totalperson = document.getElementById('totalPerson')


percentage5.addEventListener('click', function(){
    if (totalPerson.value < 1) {
        alert('Preecha a quantidade de pessoas!')
    } else {
        percentage5.style.backgroundColor = '#28C1AD';
        percentage10.style.backgroundColor = '#00474B';
        percentage15.style.backgroundColor = '#00474B';
        percentage25.style.backgroundColor = '#00474B';
        percentage50.style.backgroundColor = '#00474B';
        percentage100.style.backgroundColor = '#00474B';
        

        totalTip5 = 5 * billAmount.value / 100 
        totalTip5Person = totalTip5 / totalPerson.value
        total5 = ((+billAmount.value) + (+totalTip5))/totalPerson.value
    
        tipAmountPerson.innerHTML = `R$ ${totalTip5Person.toFixed(2)}`
        totalperson.innerHTML = `R$ ${total5.toFixed(2)}`   
    }
});

percentage10.addEventListener('click', function(){
    if (totalPerson.value < 1) {
        alert('Preecha a quantidade de pessoas!')
    } else {
        percentage5.style.backgroundColor = '#00474B';
        percentage10.style.backgroundColor = '#28C1AD';
        percentage15.style.backgroundColor = '#00474B';
        percentage25.style.backgroundColor = '#00474B';
        percentage50.style.backgroundColor = '#00474B';
        percentage100.style.backgroundColor = '#00474B';

        totalTip10 = 10 * billAmount.value / 100 
        totalTip10Person = totalTip10 / totalPerson.value
        total10 = ((+billAmount.value) + (+totalTip10))/totalPerson.value
    
        tipAmountPerson.innerHTML = `R$ ${totalTip10Person.toFixed(2)}`
        totalperson.innerHTML = `R$ ${total10.toFixed(2)}`   
    }
})

percentage15.addEventListener('click', function(){
    if (totalPerson.value < 1) {
        alert('Preecha a quantidade de pessoas!')
    } else {
        percentage5.style.backgroundColor = '#00474B';
        percentage10.style.backgroundColor = '#00474B';
        percentage15.style.backgroundColor = '#28C1AD';
        percentage25.style.backgroundColor = '#00474B';
        percentage50.style.backgroundColor = '#00474B';
        percentage100.style.backgroundColor = '#00474B';

        totalTip15 = 15 * billAmount.value / 100 
        totalTip15Person = totalTip15 / totalPerson.value
        total15 = ((+billAmount.value) + (+totalTip15))/totalPerson.value
    
        tipAmountPerson.innerHTML = `R$ ${totalTip15Person.toFixed(2)}`
        totalperson.innerHTML = `R$ ${total15.toFixed(2)}`   
    }
})

percentage25.addEventListener('click', function(){
    if (totalPerson.value < 1) {
        alert('Preecha a quantidade de pessoas!')
    } else {
        percentage5.style.backgroundColor = '#00474B';
        percentage10.style.backgroundColor = '#00474B';
        percentage15.style.backgroundColor = '#00474B';
        percentage25.style.backgroundColor = '#28C1AD';
        percentage50.style.backgroundColor = '#00474B';
        percentage100.style.backgroundColor = '#00474B';

        totalTip25 = 25 * billAmount.value / 100 
        totalTip25Person = totalTip25 / totalPerson.value
        total25 = ((+billAmount.value) + (+totalTip25))/totalPerson.value
    
        tipAmountPerson.innerHTML = `R$ ${totalTip25Person.toFixed(2)}`
        totalperson.innerHTML = `R$ ${total25.toFixed(2)}`   
    }
})

percentage50.addEventListener('click', function(){
    if (totalPerson.value < 1) {
        alert('Preecha a quantidade de pessoas!')
    } else {
        percentage5.style.backgroundColor = '#00474B';
        percentage10.style.backgroundColor = '#00474B';
        percentage15.style.backgroundColor = '#00474B';
        percentage25.style.backgroundColor = '#00474B';
        percentage50.style.backgroundColor = '#28C1AD';
        percentage100.style.backgroundColor = '#00474B';

        totalTip50 = 50 * billAmount.value / 100 
        totalTip50Person = totalTip50 / totalPerson.value
        total50 = ((+billAmount.value) + (+totalTip50))/totalPerson.value
    
        tipAmountPerson.innerHTML = `R$ ${totalTip50Person.toFixed(2)}`
        totalperson.innerHTML = `R$ ${total50.toFixed(2)}`   
    }
})

percentage100.addEventListener('click', function(){
    if (totalPerson.value < 1) {
        alert('Preecha a quantidade de pessoas!')
    } else {
        percentage5.style.backgroundColor = '#00474B';
        percentage10.style.backgroundColor = '#00474B';
        percentage15.style.backgroundColor = '#00474B';
        percentage25.style.backgroundColor = '#00474B';
        percentage50.style.backgroundColor = '#00474B';
        percentage100.style.backgroundColor = '#28C1AD';

        totalTip100 = 100 * billAmount.value / 100 
        totalTip100Person = totalTip100 / totalPerson.value
        total100 = ((+billAmount.value) + (+totalTip100))/totalPerson.value
    
        tipAmountPerson.innerHTML = `R$ ${totalTip100Person.toFixed(2)}`
        totalperson.innerHTML = `R$ ${total100.toFixed(2)}`   
    }
})





