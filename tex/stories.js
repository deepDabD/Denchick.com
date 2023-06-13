const StoryHolder = document.querySelector('.Stories-holder');

stories.forEach(stry => {
  const html = `
    <div class="story">
      <h2>${stry.name}</h2>
      ${stry.cont}
    </div>
  `;
  StoryHolder.innerHTML += html;
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