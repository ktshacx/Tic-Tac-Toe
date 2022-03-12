var box1 = document.getElementById('box-1');
var box2 = document.getElementById('box-2');
var box3 = document.getElementById('box-3');
var box4 = document.getElementById('box-4');
var box5 = document.getElementById('box-5');
var box6 = document.getElementById('box-6');
var box7 = document.getElementById('box-7');
var box8 = document.getElementById('box-8');
var box9 = document.getElementById('box-9');

const players = [
    "X", "O"
]

var turn  = ""

function getRandomPlayer() {
    var rand = Math.floor(Math.random() * 2)
    turn = players[rand];
    document.getElementById('status').innerHTML = turn + "'s Turn"
}

getRandomPlayer()

function play(t){
    var index = players.indexOf(t);
    if(index == 0){
        turn = players[1];
    }else if(index == 1){
        turn = players[0];
    }
    document.getElementById('status').innerHTML = turn + "'s Turn"
}

const isClicked = {
    "box1": 0,
    "box2": 0,
    "box3": 0,
    "box4": 0,
    "box5": 0,
    "box6": 0,
    "box7": 0,
    "box8": 0,
    "box9": 0,
}

function clicked(box){
    if(isClicked[box] == 0){
        isClicked[box] = 1;
        return false;
    }else{
        return true;
    }
}

box1.addEventListener('click', () => {
    if(!clicked('box1')){
        box1.innerText = turn;
        box1.setAttribute("data-value", turn)
        play(turn);
        checkForWin();
    }
})
box2.addEventListener('click', () => {
    if(!clicked('box2')){
        box2.innerText = turn;
        box2.setAttribute("data-value", turn)
        play(turn);
        checkForWin();
    }
})
box3.addEventListener('click', () => {
    if(!clicked('box3')){
        box3.innerText = turn;
        box3.setAttribute("data-value", turn)
        play(turn);
        checkForWin();
    }
})
box4.addEventListener('click', () => {
    if(!clicked('box4')){
        box4.innerText = turn;
        box4.setAttribute("data-value", turn)
        play(turn);
        checkForWin();
    }
})
box5.addEventListener('click', () => {
    if(!clicked('box5')){
        box5.innerText = turn;
        box5.setAttribute("data-value", turn)
        play(turn);
        checkForWin();
    }
})
box6.addEventListener('click', () => {
    if(!clicked('box6')){
        box6.innerText = turn;
        box6.setAttribute("data-value", turn)
        play(turn);
        checkForWin();
    }
})
box7.addEventListener('click', () => {
    if(!clicked('box7')){
        box7.innerText = turn;
        box7.setAttribute("data-value", turn)
        play(turn);
        checkForWin();
    }
})
box8.addEventListener('click', () => {
    if(!clicked('box8')){
        box8.innerText = turn;
        box8.setAttribute("data-value", turn)
        play(turn);
        checkForWin();
    }
})
box9.addEventListener('click', () => {
    if(!clicked('box9')){
        box9.innerText = turn;
        box9.setAttribute("data-value", turn)
        play(turn);
        checkForWin();
    }
})

function checkForWin(t){
    value1 = box1.getAttribute('data-value')
    value2 = box2.getAttribute('data-value')
    value3 = box3.getAttribute('data-value')
    value4 = box4.getAttribute('data-value')
    value5 = box5.getAttribute('data-value')
    value6 = box6.getAttribute('data-value')
    value7 = box7.getAttribute('data-value')
    value8 = box8.getAttribute('data-value')
    value9 = box9.getAttribute('data-value')

    if(value1 == value2 && value3 == value2 && value3 == value1 && value1 != null){
        box1.style.color = "green";
        box2.style.color = "green";
        box3.style.color = "green";
        document.getElementById('status').innerHTML = value1 + " Won"
        document.getElementById('status').style.color = "green"
        jam()
    }

    if(value4 == value5 && value5 == value6 && value6 == value4 && value4 != null){
        box4.style.color = "green";
        box5.style.color = "green";
        box6.style.color = "green";
        document.getElementById('status').innerHTML = value4 + " Won"
        document.getElementById('status').style.color = "green"
        jam()
    }

    if(value7 == value8 && value8 == value9 && value9 == value7 && value7 != null){
        box7.style.color = "green";
        box8.style.color = "green";
        box9.style.color = "green";
        document.getElementById('status').innerHTML = value7 + " Won"
        document.getElementById('status').style.color = "green"
        jam()
    }

    if(value1 == value4 && value4 == value7 && value7 == value1 && value1 != null){
        box1.style.color = "green";
        box4.style.color = "green";
        box7.style.color = "green";
        document.getElementById('status').innerHTML = value1 + " Won"
        document.getElementById('status').style.color = "green"
        jam()
    }

    if(value2 == value5 && value5 == value8 && value8 == value2 && value2 != null){
        box2.style.color = "green";
        box5.style.color = "green";
        box8.style.color = "green";
        document.getElementById('status').innerHTML = value2 + " Won"
        document.getElementById('status').style.color = "green"
        jam()
    }

    if(value3 == value6 && value6 == value9 && value9 == value3 && value3 != null){
        box3.style.color = "green";
        box6.style.color = "green";
        box9.style.color = "green";
        document.getElementById('status').innerHTML = value3 + " Won"
        document.getElementById('status').style.color = "green"
        jam()
    }

    if(value1 == value5 && value5 == value9 && value9 == value1 && value1 != null){
        box1.style.color = "green";
        box5.style.color = "green";
        box9.style.color = "green";
        document.getElementById('status').innerHTML = value1 + " Won"
        document.getElementById('status').style.color = "green"
        jam()
    }

    if(value3 == value5 && value5 == value7 && value7 == value3 && value3 != null){
        box3.style.color = "green";
        box5.style.color = "green";
        box7.style.color = "green";
        document.getElementById('status').innerHTML = value3 + " Won"
        document.getElementById('status').style.color = "green"
        jam()
    }
    if(value1 && value2 && value3 && value4 && value5 && value6 && value7 && value8 && value9){
        document.getElementById('status').innerHTML = "Draw"
        box1.style.color = "red";
        box2.style.color = "red";
        box3.style.color = "red";
        box4.style.color = "red";
        box5.style.color = "red";
        box6.style.color = "red";
        box7.style.color = "red";
        box8.style.color = "red";
        box9.style.color = "red";
        document.getElementById('status').style.color = "red"
        jam()
    }
}

function jam(){
    isClicked.box1 = 1;
    isClicked.box2 = 1;
    isClicked.box3 = 1;
    isClicked.box4 = 1;
    isClicked.box5 = 1;
    isClicked.box6 = 1;
    isClicked.box7 = 1;
    isClicked.box8 = 1;
    isClicked.box9 = 1;
}

function reset(){
    isClicked.box1 = 0;
    isClicked.box2 = 0;
    isClicked.box3 = 0;
    isClicked.box4 = 0;
    isClicked.box5 = 0;
    isClicked.box6 = 0;
    isClicked.box7 = 0;
    isClicked.box8 = 0;
    isClicked.box9 = 0;
    box1.innerHTML = ""
    box1.style.color = "black"
    box2.innerHTML = ""
    box2.style.color = "black"
    box3.innerHTML = ""
    box3.style.color = "black"
    box4.innerHTML = ""
    box4.style.color = "black"
    box5.innerHTML = ""
    box5.style.color = "black"
    box6.innerHTML = ""
    box6.style.color = "black"
    box7.innerHTML = ""
    box7.style.color = "black"
    box8.innerHTML = ""
    box8.style.color = "black"
    box9.innerHTML = ""
    box9.style.color = "black"
    document.getElementById('status').style.color = "black"
    getRandomPlayer()
    box1.removeAttribute('data-value')
    box2.removeAttribute('data-value')
    box3.removeAttribute('data-value')
    box4.removeAttribute('data-value')
    box5.removeAttribute('data-value')
    box6.removeAttribute('data-value')
    box7.removeAttribute('data-value')
    box8.removeAttribute('data-value')
    box9.removeAttribute('data-value')
}