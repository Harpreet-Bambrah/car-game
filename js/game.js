// if(innerWidth<1100){

// }



  
 
let roadposition = document.getElementsByClassName("road-container")[0].getBoundingClientRect();



// if click gameplay then this function call 
function gameplay1() {
    document.getElementsByClassName("bg-dark")[0].style.display = "none";
    document.getElementsByClassName("game-info")[0].style.display = "none";
    document.getElementsByClassName("game-info1")[0].style.display = "none";
    document.getElementById("my-car").style.display = "block";
    document.getElementById("my-car").style.top = innerHeight - 200 + "px";
    document.getElementById("my-car").style.left = roadposition.left + 30 + "px";
    document.getElementsByClassName("road-cent-line1")[0].style.left = roadposition.left + roadposition.width/2 + "px";
    document.getElementsByClassName("road-cent-line2")[0].style.left = roadposition.left + roadposition.width/2 + "px";
    document.getElementsByClassName("road-cent-line3")[0].style.left = roadposition.left + roadposition.width/2+ "px";
    document.getElementsByClassName("road-cent-line1")[0].style.display = "block";
    document.getElementsByClassName("road-cent-line2")[0].style.display = "block";
    document.getElementsByClassName("road-cent-line3")[0].style.display = "block";
    document.documentElement.requestFullscreen()
    createcars();
    positiondetect();
    carspositions();
}




// variable use for increase animation speed in mode change 
let m;
function medium() {
    m = 8;
    document.getElementsByClassName("road-cent-line1")[0].style.animationDuration = m + "s";
    document.getElementsByClassName("road-cent-line2")[0].style.animationDuration = m + "s";
    document.getElementsByClassName("road-cent-line3")[0].style.animationDuration = m + "s";
}
function hard() {
    m = 6;
    document.getElementsByClassName("road-cent-line1")[0].style.animationDuration = m + "s";
    document.getElementsByClassName("road-cent-line2")[0].style.animationDuration = m + "s";
    document.getElementsByClassName("road-cent-line3")[0].style.animationDuration = m + "s";
}




// after game over click play again reload page function 
function playagain() {
    location.reload();
    gameplay();
}





// control my car position by arrow keys 
document.addEventListener("keydown", function (e) {
    console.log(e);
    let leftside = document.getElementById("my-car").getBoundingClientRect().left;
    let bottomside = document.getElementById("my-car").getBoundingClientRect().bottom;
    if (e.key == "ArrowRight" && leftside < roadposition.right - 80) {
        // console.log(leftside)
        document.getElementById("my-car").style.left = leftside + 10 + "px";
    } else if (e.key == "ArrowLeft" && leftside > roadposition.left + 20) {
        document.getElementById("my-car").style.left = leftside - 10 + "px";
    } else if (e.key == "ArrowDown" && bottomside < innerHeight) {
        document.getElementById("my-car").style.top = bottomside - 100 + 10 + "px";
    } else if (e.key == "ArrowUp" && bottomside > 100) {
        document.getElementById("my-car").style.top = bottomside - 110 + "px";
    }
});


function cardirection(e) {
    console.log(e);
    let leftside = document.getElementById("my-car").getBoundingClientRect().left;
    let bottomside = document.getElementById("my-car").getBoundingClientRect().bottom;
    if (e == "ArrowRight" && leftside < roadposition.right - 80) {
        // console.log(leftside)
        document.getElementById("my-car").style.left = leftside + 10 + "px";
    } else if (e == "ArrowLeft" && leftside > roadposition.left + 20) {
        document.getElementById("my-car").style.left = leftside - 10 + "px";
    } else if (e == "ArrowDown" && bottomside < innerHeight) {
        document.getElementById("my-car").style.top = bottomside - 100 + 10 + "px";
    } else if (e == "ArrowUp" && bottomside > 100) {
        document.getElementById("my-car").style.top = bottomside - 110 + "px";
    }
};



// this is car create if condition variable 
let a = 0;


// this is stop car create function then game over 
let ifvalue = true;

function createcars() {
    console.log(roadposition);
    let carssrc = ["images/car1.png", "images/car4.png", "images/car2.png", "images/car3.png", "images/car5.png", "images/car6.png", "images/car7.png", "images/car8.png", "images/car3.png", "images/car5.png"];
    if (a < carssrc.length) {
        let car1 = document.createElement("img");
        car1.className = "cars car-animate";
        car1.src = carssrc[a];
        document.getElementsByClassName("road-container")[0].appendChild(car1);
    }
    // let randomno = [];
    // for(i=0; i< carssrc.length; i++)
    // {
    //    let randomnos = Math.floor((Math.random()*550)+roadposition.left+10);
    //    if(randomnos)
    //    if(randomno.includes(randomnos)){

    //    let randomnos = Math.floor((Math.random()*550)+roadposition.left+10);
    //    if(randomno.includes(randomnos)){

    //    }else{
    //     for(y=0; y< randomno.length; y++)
    //     {
    //         if(randomno[y] >){
    //        randomno.push(randomnos);
    //     }
    //    }
    //    }else{
    //        randomno.push(randomnos);
    //    }
    // }
    // console.log(randomno);
    let randomno = [
        roadposition.left + roadposition.width*51/100,
        roadposition.left + roadposition.width*21/100,
        roadposition.left + roadposition.width*3/100,
        roadposition.left + roadposition.width*71/100,
        roadposition.left + roadposition.width*85/100,
        roadposition.left + roadposition.width*41/100,
        roadposition.left + roadposition.width*13/100,
        roadposition.left + roadposition.width*61/100,
        roadposition.left + roadposition.width*81/100,
        roadposition.left + roadposition.width*31/100,
    ];

    if (a < carssrc.length) {
        document.getElementsByClassName("cars")[a].style.left = randomno[a] + "px";
        a++;
    }

    if (ifvalue) {
        setTimeout(createcars, 5000);
    }
}




// this variables used for tracking car position after 10ms 

let positionstorecar1;
let positionstorecar2;
let positionstorecar3;
let positionstorecar4;
let positionstorecar5;
let positionstorecar6;
let positionstorecar7;
let positionstorecar8;
let positionstorecar9;
let positionstorecar10;
let positionstorecar1l;
let positionstorecar2l;
let positionstorecar3l;
let positionstorecar4l;
let positionstorecar5l;
let positionstorecar6l;
let positionstorecar7l;
let positionstorecar8l;
let positionstorecar9l;
let positionstorecar10l;
let positionstoremycar;
let positionstoremycarl;


// track cars diff left top 
let diffleft1;
let diffleft2;
let diffleft3;
let diffleft4;
let diffleft5;
let diffleft6;
let diffleft7;
let diffleft8;
let diffleft9;
let diffleft10;
let difftopcar1;
let difftopcar2;
let difftopcar3;
let difftopcar4;
let difftopcar5;
let difftopcar6;
let difftopcar7;
let difftopcar8;
let difftopcar9;
let difftopcar10;




// car position tracking function 
function carspositions() {
    if (ifvalue) {
        setTimeout(function car2() {
            positionstorecar2 = Math.round(document.getElementsByClassName("cars")[1].getBoundingClientRect().top);
            positionstorecar2l = Math.round(document.getElementsByClassName("cars")[1].getBoundingClientRect().left);
            diffleft2 = positionstorecar2l - positionstoremycarl;
            difftopcar2 = positionstorecar2 - positionstoremycar;
            if (ifvalue) {
                setTimeout(car2, 10);
            }
        }, 5000);
    }

    if (ifvalue) {
        setTimeout(function car3() {
            positionstorecar3 = Math.round(document.getElementsByClassName("cars")[2].getBoundingClientRect().top);
            positionstorecar3l = Math.round(document.getElementsByClassName("cars")[2].getBoundingClientRect().left);
            diffleft3 = positionstorecar3l - positionstoremycarl;
            difftopcar3 = positionstorecar3 - positionstoremycar;
            if (ifvalue) {
                setTimeout(car3, 10);
            }
        }, 10100);
    }

    if (ifvalue) {
        setTimeout(function car4() {
            positionstorecar4 = Math.round(document.getElementsByClassName("cars")[3].getBoundingClientRect().top);
            positionstorecar4l = Math.round(document.getElementsByClassName("cars")[3].getBoundingClientRect().left);
            diffleft4 = positionstorecar4l - positionstoremycarl;
            difftopcar4 = positionstorecar4 - positionstoremycar;
            if (ifvalue) {
                setTimeout(car4, 10);
            }
        }, 15100);
    }
    if (ifvalue) {
        setTimeout(function car5() {
            positionstorecar5 = Math.round(document.getElementsByClassName("cars")[4].getBoundingClientRect().top);
            positionstorecar5l = Math.round(document.getElementsByClassName("cars")[4].getBoundingClientRect().left);
            diffleft5 = positionstorecar5l - positionstoremycarl;
            difftopcar5 = positionstorecar5 - positionstoremycar;
            if (ifvalue) {
                setTimeout(car5, 10);
            }
        }, 20100);
    }
    if (ifvalue) {
        setTimeout(function car6() {
            positionstorecar6 = Math.round(document.getElementsByClassName("cars")[5].getBoundingClientRect().top);
            positionstorecar6l = Math.round(document.getElementsByClassName("cars")[5].getBoundingClientRect().left);
            diffleft6 = positionstorecar6l - positionstoremycarl;
            difftopcar6 = positionstorecar6 - positionstoremycar;
            if (ifvalue) {
                setTimeout(car6, 10);
            }
        }, 25100);
    }

    if (ifvalue) {
        setTimeout(function car7() {
            positionstorecar7 = Math.round(document.getElementsByClassName("cars")[6].getBoundingClientRect().top);
            positionstorecar7l = Math.round(document.getElementsByClassName("cars")[6].getBoundingClientRect().left);
            diffleft7 = positionstorecar7l - positionstoremycarl;
            difftopcar7 = positionstorecar7 - positionstoremycar;
            if (ifvalue) {
                setTimeout(car7, 10);
            }
        }, 30100);
    }

    if (ifvalue) {
        setTimeout(function car8() {
            positionstorecar8 = Math.round(document.getElementsByClassName("cars")[7].getBoundingClientRect().top);
            positionstorecar8l = Math.round(document.getElementsByClassName("cars")[7].getBoundingClientRect().left);
            diffleft8 = positionstorecar8l - positionstoremycarl;
            difftopcar8 = positionstorecar8 - positionstoremycar;
            if (ifvalue) {
                setTimeout(car8, 10);
            }
        }, 35100);
    }
    if (ifvalue) {
        setTimeout(function car9() {
            positionstorecar9 = Math.round(document.getElementsByClassName("cars")[8].getBoundingClientRect().top);
            positionstorecar9l = Math.round(document.getElementsByClassName("cars")[8].getBoundingClientRect().left);
            diffleft9 = positionstorecar9l - positionstoremycarl;
            difftopcar9 = positionstorecar9 - positionstoremycar;
            setTimeout(car9, 10);
        }, 40100);
    }

    if (ifvalue) {
        setTimeout(function car10() {
            positionstorecar10 = Math.round(document.getElementsByClassName("cars")[9].getBoundingClientRect().top);
            positionstorecar10l = Math.round(document.getElementsByClassName("cars")[9].getBoundingClientRect().left);
            diffleft10 = positionstorecar10l - positionstoremycarl;
            difftopcar10 = positionstorecar10 - positionstoremycar;
            setTimeout(car10,10);
        }, 45100);
    }
}



// score variable 
let score = 0;



// comparison car position if cars closer than game over 
function positiondetect() {
    positionstoremycar = Math.round(document.getElementById("my-car").getBoundingClientRect().top);
    positionstoremycarl = Math.round(document.getElementById("my-car").getBoundingClientRect().left);
    // console.log(Math.round(document.getElementById('my-car').getBoundingClientRect().left))
    // console.log(Math.round(document.getElementsByClassName('cars')[0].getBoundingClientRect().left))

    positionstorecar1 = Math.round(document.getElementsByClassName("cars")[0].getBoundingClientRect().top);
    positionstorecar1l = Math.round(document.getElementsByClassName("cars")[0].getBoundingClientRect().left);
    diffleft1 = positionstorecar1l - positionstoremycarl;
    difftopcar1 = positionstorecar1 - positionstoremycar;
    console.log(positionstorecar1 - positionstoremycar);
    const time = setTimeout(positiondetect, 10);
    //  console.log(diffleft1)

    if (difftopcar1 < 100 && difftopcar1 > -100 && diffleft1 < 50 && diffleft1 > -50) {
        document.getElementsByClassName("cars")[0].classList.remove("car-animate");
        document.getElementsByClassName("road-container")[0].style.display = "none";
        document.getElementById("score-cont").style.display = "none";
        document.getElementsByClassName("bg-dark")[0].style.display = "block";
        document.getElementsByClassName("game-info1")[0].style.display = "block";
        clearTimeout(time);
        ifvalue = false;
    } else if (difftopcar2 < 100 && difftopcar2 > -100 && diffleft2 < 50 && diffleft2 > -50) {
        document.getElementsByClassName("cars")[1].classList.remove("car-animate");
        document.getElementsByClassName("road-container")[0].style.display = "none";
        document.getElementById("score-cont").style.display = "none";
        document.getElementsByClassName("bg-dark")[0].style.display = "block";
        document.getElementsByClassName("game-info1")[0].style.display = "block";
        clearTimeout(time);
        ifvalue = false;
    } else if (difftopcar3 < 100 && difftopcar3 > -100 && diffleft3 < 50 && diffleft3 > -50) {
        document.getElementsByClassName("cars")[2].classList.remove("car-animate");
        document.getElementsByClassName("road-container")[0].style.display = "none";
        document.getElementById("score-cont").style.display = "none";
        document.getElementsByClassName("bg-dark")[0].style.display = "block";
        document.getElementsByClassName("game-info1")[0].style.display = "block";
        clearTimeout(time);
        ifvalue = false;
    } else if (difftopcar4 < 100 && difftopcar4 > -100 && diffleft4 < 50 && diffleft4 > -50) {
        document.getElementsByClassName("cars")[3].classList.remove("car-animate");
        document.getElementsByClassName("road-container")[0].style.display = "none";
        document.getElementById("score-cont").style.display = "none";
        document.getElementsByClassName("bg-dark")[0].style.display = "block";
        document.getElementsByClassName("game-info1")[0].style.display = "block";
        clearTimeout(time);
        ifvalue = false;
    } else if (difftopcar5 < 100 && difftopcar5 > -100 && diffleft5 < 50 && diffleft5 > -50) {
        document.getElementsByClassName("cars")[4].classList.remove("car-animate");
        document.getElementsByClassName("road-container")[0].style.display = "none";
        document.getElementById("score-cont").style.display = "none";
        document.getElementsByClassName("bg-dark")[0].style.display = "block";
        document.getElementsByClassName("game-info1")[0].style.display = "block";
        clearTimeout(time);
        ifvalue = false;
    } else if (difftopcar6 < 100 && difftopcar6 > -100 && diffleft6 < 50 && diffleft6 > -50) {
        document.getElementsByClassName("cars")[5].classList.remove("car-animate");
        document.getElementsByClassName("road-container")[0].style.display = "none";
        document.getElementById("score-cont").style.display = "none";
        document.getElementsByClassName("bg-dark")[0].style.display = "block";
        document.getElementsByClassName("game-info1")[0].style.display = "block";
        clearTimeout(time);
        ifvalue = false;
    } else if (difftopcar7 < 100 && difftopcar7 > -100 && diffleft7 < 50 && diffleft7 > -50) {
        document.getElementsByClassName("cars")[6].classList.remove("car-animate");
        document.getElementsByClassName("road-container")[0].style.display = "none";
        document.getElementById("score-cont").style.display = "none";
        document.getElementsByClassName("bg-dark")[0].style.display = "block";
        document.getElementsByClassName("game-info1")[0].style.display = "block";
        clearTimeout(time);
        ifvalue = false;
    } else if (difftopcar8 < 100 && difftopcar8 > -100 && diffleft8 < 50 && diffleft8 > -50) {
        document.getElementsByClassName("cars")[7].classList.remove("car-animate");
        document.getElementsByClassName("road-container")[0].style.display = "none";
        document.getElementById("score-cont").style.display = "none";
        document.getElementsByClassName("bg-dark")[0].style.display = "block";
        document.getElementsByClassName("game-info1")[0].style.display = "block";
        clearTimeout(time);
        ifvalue = false;
    } else if (difftopcar9 < 100 && difftopcar9 > -100 && diffleft9 < 50 && diffleft9 > -50) {
        document.getElementsByClassName("cars")[8].classList.remove("car-animate");
        document.getElementsByClassName("road-container")[0].style.display = "none";
        document.getElementById("score-cont").style.display = "none";
        document.getElementsByClassName("bg-dark")[0].style.display = "block";
        document.getElementsByClassName("game-info1")[0].style.display = "block";
        clearTimeout(time);
        ifvalue = false;
    } else if (difftopcar10 < 100 && difftopcar10 > -100 && diffleft10 < 50 && diffleft10 > -50) {
        document.getElementsByClassName("cars")[9].classList.remove("car-animate");
        document.getElementsByClassName("road-container")[0].style.display = "none";
        document.getElementById("score-cont").style.display = "none";
        document.getElementsByClassName("bg-dark")[0].style.display = "block";
        document.getElementsByClassName("game-info1")[0].style.display = "block";
        clearTimeout(time);
        ifvalue = false;
    }

    document.getElementById("score").innerHTML = "Score :" + score;
    document.getElementById("score-update").innerHTML = "Your Score :" + score;
    console.log(score);

    let carlen = document.getElementsByClassName("cars").length;

    // increase car speed during loop
    for (let x = 0; x < carlen; x++) {
        document.getElementsByClassName("cars")[x].style.animationDuration = m + "s";
    }

    score++;
}
