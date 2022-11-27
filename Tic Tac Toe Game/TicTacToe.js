console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = 'X'
let over=true
let boxes = Array.from(document.getElementsByClassName('common'));
let reset=document.getElementsByTagName('button')[0];


// console.log(boxes[0])


changeTurn = () => {

    return turn == "X" ? "0" : "X"
}

const checkWin = () => {
    
    
    let wins = [
        [0, 1, 2,15,-10,90],
        [3, 4, 5,15,0,90],
        [6, 7, 8,15,10,90],
        [0, 3, 6,5,0,180],
        [1, 4, 7,15,0,180],
        [2, 5, 8,25,0,180],
        [0, 4, 8,15,0,135],
        [2, 4, 6,15,0,45],
    ]

    
    wins.forEach(e => {
        if ((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[1]].innerText === boxes[e[2]].innerText) && (boxes[e[0]].innerText !== "")) {
            document.getElementById('yourturn').innerText= boxes[e[0]].innerText + " won";
            // console.log(e[0])
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector('.line').style.height = '30vw';
            document.querySelector('.line').style.width = '2px';
            over=false;
            document.getElementsByTagName('img')[0].style.width='200px'
        }
    })
}
boxes.forEach((element) => {

    
    element.addEventListener('click', () => {

        
    
        // console.log(boxes);
        if (element.innerText == '') {

            element.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();

            if(over){
            document.getElementById('yourturn').innerText = "Turn for " + turn;
        
        }

        }
    })
})

reset.addEventListener('click',()=>{

    Array.from(boxes).forEach((box)=>{

       box.innerText = "";
    })

    over="true"
    document.getElementById('yourturn').innerText = "Turn for X";
    document.getElementsByTagName('img')[0].style.width='0'
    document.querySelector('.line').style.height = '0vw';
            document.querySelector('.line').style.width = '0px';

}

)

