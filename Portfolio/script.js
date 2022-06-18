
function escrita(x) {
    
    let array = "Nada Para Ver Aqui...";
    array = array.split('');
    x.innerHTML = '';

    array.forEach( 
            function(letra,z){
                setTimeout( function(){
                    x.innerHTML +=letra;
                }, 75 * z)  
            }
        )
   };
 

function ativaEscrita(){

    const Nd = document.getElementsByClassName('Projeto-Nada');

    for(let y=0; y< Nd.length; y++){
        escrita(Nd[y]);
    }

}

function Semback(){
    alert("FIM DA PAGINA - TEMA: ONE PIECE BROOK");
}






