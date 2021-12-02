let inputPass = document.querySelector('.password');
let inputConfirmPass = document.querySelector('.confirmPass');

inputConfirmPass.addEventListener('focusout', () => {
   if( inputPass.value !== inputConfirmPass.value){
      alert('As senhas não coincidem');
   }
})