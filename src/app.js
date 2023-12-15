
const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Volverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo"
];

const initPlayers = (players) => {
  let detailedPlayers = [];

  
  players.forEach((player, i) => {
  
    detailedPlayers.push({
  
      name: player,
  
      strength: getRandomStrength(),
  
      image: `images/super-${i + 1}.png`,
  
      type: i % 2 === 0 ? 'hero' : 'villain',
  
      id: i + 1,
  
    });
  });

  return detailedPlayers;
};

const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

const view = (userobj) => {

  let player = document.createElement('div');

  
  player.classList.add('player');

  
  let image = document.createElement('img');
  
  image.setAttribute('src', userobj.image);
  
  image.setAttribute('alt', '');

  
  let name = document.createElement('div');
  
  name.className = 'name';
  
  name.textContent = userobj.name;

  let strength = document.createElement('div');
  
  strength.textContent = userobj.strength;
  
  strength.className = 'strength';

  
  player.append(image, name, strength);

  
  return player;

};

const buildPlayers = (players, type) => {

  let fragment = document.createElement('div');

  players

  .filter((player) => player.type === type)
      .forEach((player) => fragment.append(view(player)));


  
      return fragment.innerHTML;

    };


    const viewPlayers = (players) => {

      document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');

      document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');

    };

window.onload = () => {

  viewPlayers(initPlayers(PLAYERS));

};