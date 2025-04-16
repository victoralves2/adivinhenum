let numSort = Math.floor(Math.random()*21);
let Score = 20;
let HighScore = 0;
let ps = document.querySelector("#score");
let hs = document.querySelector("#hs");
let numTexto = document.querySelector("#numtexto");

alert(numSort);

function test(){
    let aux = document.getElementById("valor").value;
    let num = Number(aux);
    if(num === numSort){
        document.body.style.backgroundColor = "green";
        if(Score>HighScore){
            HighScore = Score;
            hs.innerHTML = "HighScore: " + HighScore;
        }
        numTexto.innerHTML = numSort;
        numTexto.style.color = "green"
    }else if(Score === 0){
        document.body.style.backgroundColor = "red";
        ps.innerHTML = "Derrota";
        numTexto.innerHTML = numSort;
        numTexto.style.color = "red";
    }else{
        Score--;
        ps.innerHTML = Score;
    }
}

function Reset(){
    alert("Novo numero sorteado!");
    numSort = Math.floor(Math.random()*21);
    Score = 20;
    HighScore = 0;
    ps.innerHTML = Score;
    numTexto.innerHTML = "?";
    numTexto.style.color = "black";
    document.body.style.backgroundColor = "black";
}