function Selecao() {
    let opcao = document.getElementById("opcao").value;  
    console.log(opcao);
    
    let Machine = Mac();
    console.log(Machine);

    if ( opcao === Machine) {
            alert("Empate")
    } else {
        if (opcao == "Pedra" && Machine == "Tesoura") {
            alert("Venceu") 
        }else {
            if (opcao == "Papel" && Machine == "Pedra") {
                alert("Venceu") 
                }else {
                    if (opcao == "Tesoura" && Machine == "Papel") {
                    alert("Venceu") 
                    }
                         else{
                            alert("Perdeu")
                            }
                    }
            }
    }

}


function Mac(){
    let num = Math.floor(Math.random() * 10);
    let ac = ""
    
    if (num <=3) {
        ac = "Pedra";
    }
    else{
        if (num <=6) {
            ac = "Papel";
        }
            else{
                if(num > 6){
                    ac = "Tesoura"; 
                }
            }
    } 

    return ac;
    
}
