var acertou=0;
var number = 3;
var chances=3;
function testa_numero() { 
    numberUser=(document.getElementById('numberUser').value)
    if (numberUser == number) {
        acertou=1;
    }
    else {
        chances--;
    }
    if (acertou==1) {
        document.body.style.backgroundImage = "url('mentalista.jpg')";
        document.write(`<h2> Você acertou. Agora você é um mentalista</h2>`);
    }if (chances<3 && chances>0) {
        document.write(`<h2> Você errou. você tem mais ${chances} tentativas </h2>`);
    }  
    else if(chances==0){
        document.body.style.backgroundImage = "url('trsie.jpg')";
        document.write(`<h2> Suas tentativas acabaram </h2>`);
    } 
}



