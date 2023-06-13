const donateBtn = document.querySelector('.Header-buttons-donate');
const donatePopup = document.querySelector('.Header-donate');

let donate = false;
donateBtn.addEventListener('click', () => {
  if(!donate)
  {
    donateBtn.classList.add('Header-buttons-donate-active');
    donatePopup.classList.add('Header-donate-active');
    donate = true;
  }
  else
  {
    donateBtn.classList.remove('Header-buttons-donate-active');
    donatePopup.classList.remove('Header-donate-active');
    donate = false;
  }
  
});