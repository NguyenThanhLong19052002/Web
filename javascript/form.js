
const $ = document.querySelector.bind(document);

const btnClose = $('.btn-close-form');

const btnLogin = $('.login');

const modalSignUp = $('.modal-sign_up');

btnLogin.onclick = function(){
    modalSignUp.classList.add('open');
}