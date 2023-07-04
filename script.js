const vermelho = document.getElementById('vermelho');
const verde = document.getElementById('verde');
const amarelo = document.getElementById('Amarelo');
const azul = document.getElementById('Azul');


let vetjogador=[] 
let vetmaq=[];
jogar();

vermelho.onclick= () =>{
    setTimeout(()=>{
        vermelho.style.backgroundColor='#ff0000'
    }, 500)
    vetjogador.push(1);
    console.log('Jogador '+ vetjogador);

    vermelho.style.background='#FF6347'
}

verde.onclick= () =>{
    setTimeout(()=>{
        verde.style.backgroundColor='rgb(0, 128, 0)'
    }, 500)

    verde.style.background='#3CB371'
    
    vetjogador.push(2);
    console.log('Jogador '+ vetjogador);

}

amarelo.onclick= () =>{
    setTimeout(()=>{
        amarelo.style.backgroundColor='#ffd700'
    }, 500)

    amarelo.style.background='#F0E68C'

    vetjogador.push(3);
    console.log('Jogador '+ vetjogador);

}

azul.onclick= () =>{
    setTimeout(()=>{
        azul.style.backgroundColor='#000080'
    }, 500)

    azul.style.background='#87CEFA'

    vetjogador.push(4);
    console.log('Jogador '+  vetjogador);

}

jogarMaquina.onclick = ()=>{
    jogar();
};

function jogar(){
    vetmaq.push(Math.floor(Math.random() * 4 + 1));
    console.log('Máquina '+ vetmaq);
}
function verifygame(){
    const resp = vetmaq.map( function(elemento, indice, array){
        //console.log(indice);
        //console.log(array);
        if(vetjogador[indice]== elemento){
            return 1;
        }else{
            vetmaq=[];
            return 0;

        }
    });
    console.log('Teste de acerto = ' + resp);

}

////////////////////// solução 2 /////////////////
function verifygame2(){
    tamVet = vetmaq.length;
    let i = 0, resp;
    while (i < tamVet) {
        if (vetjogador[i] != vetmaq[i]) {
           resp=0;
           vetmaq=[];
           break;
        }else{
            resp=1;
        }
        i += 1;
     }
     console.log('Teste de acerto = ' + resp);
     vetjogador=[];
     
}

verificar.onclick=()=>{
    verifygame();
};