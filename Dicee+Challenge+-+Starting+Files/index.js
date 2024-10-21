

    var randomNumber1 = Math.floor((Math.random() * 6)+1);
    var randomNumber2 = Math.floor((Math.random() * 6)+1);
    
    //Player1
    const img1Element = document.querySelector(".img1").setAttribute("src", "/images/dice" + randomNumber1 + ".png" );
    
    //Player2
    const img2Element = document.querySelector(".img2").setAttribute("src", "/images/dice" + randomNumber2 + ".png" );
    
    const title = document.querySelector("h1");


    if(randomNumber1 > randomNumber2){
        title.innerText = "Player One Wins";
    }else if(randomNumber1 < randomNumber2){
        title.innerText = "Player Two Wins";

    } else{
        title.innerText = "Draw";

    }