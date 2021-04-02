var acertou=0;
var number =Math.floor(Math.random() * 10);
console.log(number)
var chances=3;
function testa_numero() { 
    numberUser=(document.getElementById('numberUser').value)
    if (numberUser == number) {
        acertou=1;
    }
    else {
        chances--;
    }
    if (chances<3 && chances>0) {
        const y=document.getElementById( "resposta" );
        y.innerHTML=`Você errou. você tem mais ${chances} tentativas`;
    }  
    else if(chances==0){
        document.body.style.backgroundImage = "url('trsie.jpg')";
        const z=document.getElementById( "resposta" );
        z.innerHTML=`Suas tentativas acabaram`;
    } 
    if (acertou==1) {
        document.body.style.backgroundImage = "url('mentalista.jpg')";
        const x=document.getElementById( "resposta" );
        x.innerHTML=`Você acertou. Agora você é um mentalista`;
    }
}



