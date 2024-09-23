document.getElementById('button-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addAmount = getInputFieldValueById('int-ammount');

    const pass = getInputFieldValueById('int-pass');
    
    if(pass === 1234){
        const currentAmount = getTextValueByID('initial');
        const total = addAmount + currentAmount;
        document.getElementById('initial').innerText = total;

        const p = document.createElement('p');
        p.innerText = `Added: ${addAmount} TK.   Balance: ${total}`;
        document.getElementById('transContainer').appendChild(p);
    }
    else{
        alert("transection Failed. PLease try again");
    }
})

document.getElementById('button-cashOut-money').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount = getInputFieldValueById('int-cashOut');

    const pass = getInputFieldValueById('int-pass-cashOut');
    
    if(pass === 1234){
        const currentAmount = getTextValueByID('initial');
        const total = currentAmount - cashOutAmount ;
        document.getElementById('initial').innerText = total;

        const div = document.createElement('div');
        div.innerHTML = `
            <h4>Cash Out</h4>
            <p>Cash Out: ${cashOutAmount} TK.  Balance: ${total}</p>
        `
        document.getElementById('transContainer').appendChild(div);

    }
    else{
        alert("transection Failed. PLease try again");
    }
})



document.getElementById('cashOut').addEventListener('click', function(){
    showSectionById('cashOutDiv');
})

document.getElementById('addMoney').addEventListener('click', function(){
    showSectionById('addMoneyDiv');
})

document.getElementById('transButton').addEventListener('click', function(){
    showSectionById('transactionDiv');
})


// console.log('yes');