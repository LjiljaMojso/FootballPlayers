var teamData = {
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
var playersArray = teamData.players;
console.log(playersArray);

function randomPickPlayer(array) {
    var i = array.length;
    var j = array.length;
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

var logo = document.createElement("img");
logo.setAttribute("src", teamData.teamLogo);
var header = document.querySelector("header");
header.appendChild(logo);

var main = document.createElement("div");
main.setAttribute("id", "main");
var body = document.querySelector("body");
body.appendChild(main);


var title = document.createElement("h1");
title.innerHTML = teamData.teamName;
header.after(title);

var players = document.createElement("div");
players.setAttribute("id", "players");
main.appendChild(players);


var subs = document.createElement("div");
subs.setAttribute("id", "subs");
main.appendChild(subs);


var subsTitle = document.createElement("h2");
subsTitle.innerHTML = "Substitutes";
players.after(subsTitle);

var firstEleven = 11;
var substitutions = 4;

function addPlayers() {
    for (var i = 0; i < firstEleven + substitutions; i++) {
      if (i < firstEleven) {
      var parentDiv = players;
      } else {
      var parentDiv = subs;
    }

    var player = document.createElement("div");
    player.classList.add("player");
    parentDiv.appendChild(player);

  
    var playerImage = document.createElement("img");
    playerImage.setAttribute("src", teamData.players[i].photo);
    player.appendChild(playerImage);


    var playerName = document.createElement("h4");
    playerName.innerHTML = teamData.players[i].name;
    player.appendChild(playerName);

    var playerLastName = document.createElement("h3");
    playerLastName.innerHTML = teamData.players[i].lastName;
    player.appendChild(playerLastName);

    var playerPosition = document.createElement("h4");
    playerPosition.innerHTML = teamData.players[i].position;
    player.appendChild(playerPosition);

    var playerCountry = document.createElement("h5");
    playerCountry.innerHTML = teamData.players[i].country;
    player.appendChild(playerCountry);

    var playerNumber = document.createElement("p");
    playerNumber.innerHTML = teamData.players[i].number;
    player.appendChild(playerNumber);
    }
}

function getRandomPlayer(arr) {
  return Math.floor(Math.random() * playersArray.length);
}

function makeChange() {
    
  var firstTeam = document.querySelectorAll("#players .player");
  var secondTeam = document.querySelectorAll("#subs .player");

  var firstTeamNumber = getRandomPlayer(firstTeam);
  var secondTeamNumber = getRandomPlayer(secondTeam);

  var firstTeamPlayer = firstTeam[firstTeamNumber];
  var secondTeamPlayer = secondTeam[secondTeamNumber];

  var subPrevious = secondTeamPlayer.previousSibling;
  var subNext = secondTeamPlayer.nextSibling;

  firstTeamPlayer.after(secondTeamPlayer);

  subPrevious
    ? subPrevious.after(firstTeamPlayer)
    : subNext.before(firstTeamPlayer);
}

addPlayers();
setInterval(makeChange, 10000);



