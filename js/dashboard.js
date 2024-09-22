document.getElementById('button-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addAmt = document.getElementById('int-ammount').value;
    const addAmount = parseFloat(addAmt);

    const pass = document.getElementById('int-pass').value;
    
    if(pass === '1234'){
        const current = document.getElementById('initial').innerText;
        const currentAmount = parseFloat(current);
        const total = addAmount + currentAmount;
        document.getElementById('initial').innerText = total;

    }
    else{
        alert("transection Failed. PLease try again");
    }
})

document.getElementById('button-cashOut-money').addEventListener('click', function(event){
    event.preventDefault();
    const addAmt = document.getElementById('int-cashOut').value;
    const cashOutAmount = parseFloat(addAmt);

    const pass = document.getElementById('int-pass-cashOut').value;
    
    if(pass === '1234'){
        const current = document.getElementById('initial').innerText;
        const currentAmount = parseFloat(current);
        const total = currentAmount - cashOutAmount ;
        document.getElementById('initial').innerText = total;

    }
    else{
        alert("transection Failed. PLease try again");
    }
})

document.getElementById('cashOut').addEventListener('click', function(){
    document.getElementById('addMoneyDiv').classList.add('hidden');
    document.getElementById('cashOutDiv').classList.remove('hidden');
})

document.getElementById('addMoney').addEventListener('click', function(){
    document.getElementById('cashOutDiv').classList.add('hidden');
    document.getElementById('addMoneyDiv').classList.remove('hidden');
})


// console.log('yes');