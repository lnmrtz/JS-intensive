const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

//day 1
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('delivery');

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
  loginInput.removeAttribute("placeholder");
}



function authorized() {
  console.log("authorized");

function logOut() {
  login = '';
  
  buttonAuth.style.display = '';
  userName.style.display = '';
  buttonOut.style.display = '';
  buttonOut.removeEventListener('click', logOut);
  checkAuth();
}

  userName.textContent = login;

  buttonAuth.style.display = 'none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut);
}

function notAuthorized() {
  console.log("Not aithorized");

 function logIn(event) {
   event.preventDefault();
   if(loginInput.value!=="") {
    login = loginInput.value;
    localStorage.setItem('delivery', login);
    toggleModalAuth();
    buttonAuth.removeEventListener('click', toggleModalAuth);
  closeAuth.removeEventListener('click', toggleModalAuth);
  loginForm.removeEventListener('submit', logIn);
  loginForm.reset();
    checkAuth();
   } else {
     loginInput.setAttribute("placeholder", "Введите логин!");
   }
   
   
 }

 buttonAuth.addEventListener('click', toggleModalAuth);
 closeAuth.addEventListener('click', toggleModalAuth);
 loginForm.addEventListener('submit', logIn);
}

function checkAuth() {
  if(login) {
    authorized();
  } else {
    notAuthorized();
  }
}
checkAuth();
