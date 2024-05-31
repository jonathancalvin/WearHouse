document.getElementById('registerButton').addEventListener('click', function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const pattern = /^[a-z]+@[a-z]+[.][a-z]{2,3}$/;
    const password = document.getElementById("password").value;
    const passwordPattern = /(?=[A-Z]+)(?=\d*)(?=\W*)[^]{4,}/;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const tocCheckBox = document.getElementById("tocCheckBox");
    const regisButton = document.getElementById('registerButton');
    if (name == "") {
        alert("nama harus diisi");
        return
    }
    if (emailAddress == "") {
        alert("email address harus diisi");
        return;
    }
    if (!emailAddress.match(pattern)) {
        alert("email tidak valid");
        return;
    }
    if (password == "") {
        alert("password harus diisi");
        return;
    }
    if (password.length < 8) {
        alert("Panjang password minimal 8 karakter");
        return;
    }
    if (!password.match(passwordPattern)) {
        alert("Password minimal 1 Kapital, 1 simbol, 1 angka");
        return;
    }
    if (confirmPassword == "") {
        alert("Confirm password harus diisi");
        return;
    }
    if (!confirmPassword.match(password)) {
        alert("Confirm password tidak sama dengan password");
        return;
    }
    if (!tocCheckBox.checked) {
        alert("ToC harus disetujui (dicentang)");
        return;
    }
    regisButton.classList.add('active');
    Register(name, emailAddress, password);

    return;
});