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



// console.log('yes');