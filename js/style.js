// console.log('This is testing work')

document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone').value;
    console.log(phoneNumber);
    
})