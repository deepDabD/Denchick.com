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

resize();
window.onresize = () => {resize()}
function resize()
{
  if(window.innerWidth < 645)
  {
    document.querySelectorAll('.Header-buttons a button')[0].textContent = 'Ho';
    document.querySelectorAll('.Header-buttons a button')[1].textContent = 'Ga';
    document.querySelectorAll('.Header-buttons a button')[2].textContent = 'St';
    document.querySelectorAll('.Header-buttons a button')[3].textContent = 'Se';
  }
  else
  {
    document.querySelectorAll('.Header-buttons a button')[0].textContent = 'Home';
    document.querySelectorAll('.Header-buttons a button')[1].textContent = 'Gallery';
    document.querySelectorAll('.Header-buttons a button')[2].textContent = 'Stories';
    document.querySelectorAll('.Header-buttons a button')[3].textContent = 'Sells';
  }  
}