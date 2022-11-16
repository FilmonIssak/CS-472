window.onload = function(){

function printForm(){
    let submitButton = document.getElementById('login-button');
    submitButton.onclick = ()=>{
        let emailContent = document.getElementById('email');
        let passwordContent = document.getElementById('password');
        const psd = passwordContent.value;
        console.log('email :' + emailContent.value + '  ' + 'password :' + passwordContent.value);
    }


}
printForm()
}
