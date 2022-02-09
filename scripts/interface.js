document.addEventListener('DOMContentLoaded', ()=>{


    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event){

    
    let square = event.target;
    let position = square.id

    if(handleMove(position)){

        setTimeout(()=>{
            
            res = document.querySelector(".result")
            res.innerHTML = `<h1>O jogo acabou!</h1> 
            <h2>O Vencedor foi o Player ${playerTime}</h2> <br>
            <button onClick="window.location.reload();">Jogar Novamente</button>`
        }, 10)

    }
    updateSquares()
}

function updateSquares(){

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        let position = square.id
        let symbol = board[position]

        if(symbol != ''){
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}
