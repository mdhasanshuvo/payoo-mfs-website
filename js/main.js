document.getElementById('button-login').addEventListener('click', function(event){
    const num = document.getElementById('input-num').value;
    const pass = document.getElementById('input-pass').value;
    event.preventDefault();
    if(num === '018' && pass === '1234'){
        console.log("connected");
        window.location.href = './dashboard.html';
    }
    else{
        alert("Incorrect Number or Password")
    }
})





// console.log("connected")