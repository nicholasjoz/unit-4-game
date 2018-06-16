var targetscore;
var button1;
var button2;
var button3;
var button4;
var wins=0;
var losses=0;
var userscore=0;


function initialize(){
    targetscore=Math.floor(Math.random() * (120 - 19) + 19);
    console.log(targetscore);
    $("#targetscore").html(targetscore);
    userscore=0;
    $("#UserScore").html(userscore);
    button1=Math.floor(Math.random() * 11 + 1);
    console.log(button1);
    button2=Math.floor(Math.random() * 11 + 1);
    button3=Math.floor(Math.random() * 11 + 1);
    button4=Math.floor(Math.random() * 11 + 1);
}

initialize();
console.log(userscore);
console.log(targetscore);

function loser(){
    losses++;
    console.log(losses);
    $("#loser").html(losses);
    updateloss();
    initialize();
  }
  
  function winner(){
    wins++;
    console.log(wins);
    $("#winner").html(wins);
    updatewins();
    initialize();
  }

  function updatewins(){
    $("#winner").text("Wins: " + wins);    
}

    function updateloss(){
    $("#loser").text("Losses: " + losses);    
}
  
  function checkwin(){
  if (userscore == targetscore){
    winner();
  }
  else if (userscore>targetscore){
    loser();
  }
}

  function playgame(){
  
    $("#Angry").on("click", function() {
        userscore= userscore + button1;
        console.log(userscore);
        $("#UserScore").html(userscore);
        checkwin();
    })
    $("#Happy").on("click", function() {
        userscore= userscore + button2;
        console.log(userscore);
        $("#UserScore").html(userscore);
        checkwin();
    })
  
  
    $("#Hurt").on("click", function() {
        userscore= userscore + button3;
        console.log(userscore);
        $("#UserScore").html(userscore);
        checkwin();
  })
    $("#Warrior").on("click", function() {
        userscore= userscore + button4;
        console.log(userscore);
        $("#UserScore").html(userscore);
        checkwin();
  })
}
  
  
  playgame();
  updatewins();
  updateloss();
