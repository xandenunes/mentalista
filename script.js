var acertou=0;
var number = 3;
var numberUser = Number(document.getElementById('numberUser'));
var chances=3;
while (chances<0) {
    function testa_numero() { 
        if (numberUser.value==number) {
            acertou=1;
        }
        else {
            chances--;
        }
    }
    if (acertou==1) {
        document.body.style.backgroundImage = "url('mentalista.jpg')";
        console.log(`<h2> Você acertou. Agora você é um mentalista</h2>`);
    }if (chances<3 && chances>0) {
        console.log(`<h2> Você errou. você tem mais ${chances} tentativas </h2>`);
    }  
    else if(chances==0){
        document.body.style.backgroundImage = "url('triste.jpg')";
        console.log(`<h2> Suas tentativas acabaram </h2>`);
    } 
}

