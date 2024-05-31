const navBar = document.getElementById('nav-bar-container');
const toggleHamburger = document.getElementById('hamburgerMenu');
toggleHamburger.addEventListener('click', () => {
    console.log("clicked");
    navBar.classList.toggle('active');
});
const userBox = document.getElementById('UserBox');
userBox.innerHTML = localStorage.getItem('userName');