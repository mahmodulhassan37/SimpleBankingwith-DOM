// console.log('This is testing work')

document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone').value;
    const pass = document.getElementById('password').value;

    if(phoneNumber == '5' && pass =='1234')
    {
        window.location.href = 'home.html';
        console.log("You are loged in")
        
    }
    else{
        alert("Please insert correct phoneNumber or password")
    }
    
    
})