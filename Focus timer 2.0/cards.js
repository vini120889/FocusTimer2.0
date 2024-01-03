const elements = {
  tree: document.querySelector('.block-cards-tree'),
  cloud: document.querySelector('.block-cards-cloud'),
  house: document.querySelector('.block-cards-house'),
  fire: document.querySelector('.block-cards-fire')
}

const sounds = { 
  tree: new Audio('./sounds/forest.wav'),
  cloud: new Audio('./sounds/rain.wav'),
  house: new Audio('./sounds/coffehouse.wav'),
  fire: new Audio('./sounds/fire.wav'),
}

let playing = false

function clickCard(cardId) {

  const sound = sounds[cardId]

  const cardSelect = elements[cardId]
  
  if (sound.paused) {
      sound.play()
      playing = true;
      cardSelect.style.backgroundColor = '#02799D';
} else {
  sound.pause();
  playing = false;
  sound.currentTime = 0
  cardSelect.style.backgroundColor = '#E1E1E6';
}
}

Object.keys(elements).forEach(cardId => {
  elements[cardId].addEventListener('click', () => {
      clickCard(cardId);
  });
});