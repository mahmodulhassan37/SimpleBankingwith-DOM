document.getElementById('add-monybtn').addEventListener('click',function(event){
    event.preventDefault();
    let addMoney = document.getElementById('add-money').value;
    let addPin = document.getElementById('add-pin').value;
    
    if(addPin==='1234'){
        let currentAmount = document.getElementById('currentBalance').innerText;
        let totalBalance = parseFloat(currentAmount)+ parseFloat(addMoney);
        document.getElementById('currentBalance').innerText = totalBalance;

        // input field clear
    document.getElementById('add-money').value ="";
    document.getElementById('add-pin').value="";

    // transection history added add-money
    let p = document.createElement('p');
    p.innerText =`Add-Money: ${addMoney } Tk New-Balance: ${totalBalance } TK`;
    document.getElementById('transection-form').appendChild(p);
    }
    else{
        alert("Please Try Again Later")
    }
    
})

// Cash-Out form
document.getElementById('cash-out-btn').addEventListener('click',function(event){
    event.preventDefault();
   let cashOutMoney = parseFloat(document.getElementById('cash-out-input').value);
   let cashOutPin =document.getElementById('cash-out-pin').value;
   if(cashOutPin=='1234'){
    let availableBalance= parseFloat(document.getElementById('currentBalance').innerText);
    let newBalance = availableBalance - cashOutMoney;
    document.getElementById('currentBalance').innerText = newBalance;

    document.getElementById('cash-out-input').value ="";
    document.getElementById('cash-out-pin').value ="";

    // transection history of cash-out
    var p = document.createElement('p');
    p.innerText =`Add-Money: ${cashOutMoney } Tk New-Balance: ${newBalance } TK`;
    document.getElementById('transection-form').appendChild(p);
   }
   else{
    alert("Please try again later");

   }
})

//add-money start button

document.getElementById('add-money-primary').addEventListener('click',function(event){
    document.getElementById('add-money-form').classList.remove('hidden')
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transection-form').classList.add('hidden');
})

// cash-out start button
document.getElementById('cash-out-primary').addEventListener('click',function(event){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('transection-form').classList.add('hidden');
})

// transection start button 
document.getElementById('transection-primary').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('transection-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');

})
