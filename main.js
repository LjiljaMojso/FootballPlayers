const teamData = {
    teamName: "FC Barcelona",
    teamLogo: "img/barsa-logo.png",
    players:[
        {
            photo:"img/ter stegen.png",
            name:"Marc-Andre",
            lastName:"Ter Stegen",
            country:"Germany",
            number:1,
            position: "Goalkeeper",
            age: 29
        },
        {
            photo: "img/gerard pike.png",
            name: "Gerard",
            lastName: "Pike",
            country:"Spain",
            number:3,
            position: "Defender",
            age: 34
        },
        {
            photo: "img/jordi alba.png",
            name: "Jordi",
            lastName: "Alba",
            country:"Spain",
            number:18,
            position: "Defender",
            age: 32
        },
        {
            photo: "img/sergi roberto.png",
            name: "Sergi",
            lastName: "Roberto",
            country:"Spain",
            number:20,
            position: "Defender",
            age: 29
        },
        {
            photo: "img/junior firpo.png",
            name: "Junior",
            lastName: "Firpo",
            country:"Spain",
            number:24,
            position: "Defender",
            age: 25
        },
        {
            photo: "img/samuel umtiti.png",
            name: "Samuel",
            lastName: "Umtiti",
            country:"France",
            number:23,
            position: "Defender",
            age: 28
        },
        {
            photo: "img/sergio buscets.png",
            name: "Sergio",
            lastName: "Busquets",
            country:"Spain",
            number:5,
            position: "Midfielder",
            age: 33
        },
        {
            photo: "img/antoine griezmann.png",
            name: "Antoine",
            lastName: "Griezmann",
            country:"France",
            number:7,
            position: "Midfielder",
            age: 30
        },
        {
            photo: "img/philippe coutinho.png",
            name: "Philippe",
            lastName: "Coutinho",
            country:"Brazil",
            number:14,
            position: "Midfielder",
            age: 29
        },
        {
            photo: "img/frenkie de jong.png",
            name: "Frenkie",
            lastName: "De Jong",
            country:"Netherlands",
            number:21,
            position: "Midfielder",
            age: 24
        },
        {
            photo: "img/lionel messi.png",
            name: "Lionel",
            lastName: "Messi",
            country:"Argentina",
            number:10,
            position: "Forward",
            age: 34
        },
        {
            photo: "img/clement lenglet.png",
            name: "Clement",
            lastName: "Lenglet",
            country:"France",
            number:15,
            position: "Defender",
            age: 26
        },
        {
            photo: "img/ousmane dembele.png",
            name: "Ousmane",
            lastName: "Dembele",
            country:"France",
            number:11,
            position: "Forward",
            age: 24
        },
        {
            photo: "img/ricard puig.png",
            name: "Riqui",
            lastName: "Puig",
            country:"Spain",
            number:12,
            position: "Forward",
            age: 22
        },
        {   
            photo: "img/anssumane fati.png",
            name: "Anssumane",
            lastName: "Fati",
            country:"Spain",
            number:22,
            position: "Forward",
            age: 19
        }
    ]
}
let playersArray = teamData.players;
console.log(playersArray);

const randomPickPlayer = array => {
    let i = array.length;
    let j = array.length;
    while (i !== 0) {
    
      j = Math.floor(Math.random() * i);
      i--;
  
     temporaryValue = array[i];
      array[i] = array[j];
      array[j] = temporaryValue;
    }
  
    return array;
}
  
randomPickPlayer(playersArray);

let logo = document.createElement("img");
logo.setAttribute("src", teamData.teamLogo);
let header = document.querySelector("header");
header.appendChild(logo);

let main = document.createElement("div");
main.setAttribute("id", "main");
let body = document.querySelector("body");
body.appendChild(main);


let title = document.createElement("h1");
title.innerHTML = teamData.teamName;
header.after(title);

let players = document.createElement("div");
players.setAttribute("id", "players");
main.appendChild(players);


let subs = document.createElement("div");
subs.setAttribute("id", "subs");
main.appendChild(subs);


let subsTitle = document.createElement("h2");
subsTitle.innerHTML = "Substitutes";
players.after(subsTitle);



const addPlayers = () => {
    let firstEleven = 11;
    let substitutions = 4;
    for (let i = 0; i < firstEleven + substitutions; i++) {
      if (i < firstEleven) {
       parentDiv = players;
      } else {
      parentDiv = subs;
      
    }

    let player = document.createElement("div");
      player.classList.add("player");
      parentDiv.appendChild(player);

  
    let playerImage = document.createElement("img");
    playerImage.setAttribute("src", teamData.players[i].photo);
    player.appendChild(playerImage);


    let playerName = document.createElement("h4");
    playerName.innerHTML = teamData.players[i].name;
    player.appendChild(playerName);

    let playerLastName = document.createElement("h3");
    playerLastName.innerHTML = teamData.players[i].lastName;
    player.appendChild(playerLastName);

    let playerPosition = document.createElement("h4");
    playerPosition.innerHTML = teamData.players[i].position;
    player.appendChild(playerPosition);

    let playerCountry = document.createElement("h5");
    playerCountry.innerHTML = teamData.players[i].country;
    player.appendChild(playerCountry);

    let playerNumber = document.createElement("p");
    playerNumber.innerHTML = teamData.players[i].number;
    player.appendChild(playerNumber);
    }
}

const getRandomPlayer = () => Math.floor(Math.random() * playersArray.length)

const makeChange = () => {
    
  let firstTeam = document.querySelectorAll("#players .player");
  let secondTeam = document.querySelectorAll("#subs .player");

  let firstTeamNumber = getRandomPlayer(firstTeam);
  let secondTeamNumber = getRandomPlayer(secondTeam);

  let firstTeamPlayer = firstTeam[firstTeamNumber];
  let secondTeamPlayer = secondTeam[secondTeamNumber];

  let subPrevious = secondTeamPlayer.previousSibling;
  let subNext = secondTeamPlayer.nextSibling;

  firstTeamPlayer.after(secondTeamPlayer);

  subPrevious
    ? subPrevious.after(firstTeamPlayer)
    : subNext.before(firstTeamPlayer);
}

addPlayers();
setInterval(makeChange, 5000);



