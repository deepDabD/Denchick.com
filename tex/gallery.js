const PhotoHolder = document.querySelector('.Photos-holder');

arts.forEach(art => {
  const html = `
    <div class="photo">
      <img src=${art.image} class="photo-img">
      <div class="photo-info">
        <h3>${art.name}</h3>
        ${art.about}
      </div>
    </div>
  `;
  PhotoHolder.innerHTML += html;
})