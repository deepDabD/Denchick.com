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


