document.getElementById('loginButton').addEventListener('click',function(event){
    event.preventDefault();
    const emailAddress = document.getElementById('emailAddress').value;
    const pattern = /^[a-z]+@[a-z]+[.][a-z]{2,3}$/;
    const password = document.getElementById('password').value;
    if (emailAddress == "") {
        console.log("Hallo");
        alert("email address harus diisi");
        return;
    }
    if(!emailAddress.match(pattern)){
        alert("email tidak valid");
        return;
    }
    if(password == ""){
        alert("password harus diisi");
        return;
    }
    console.log(emailAddress)
    console.log(password);
    Login(emailAddress, password);
    return;
});