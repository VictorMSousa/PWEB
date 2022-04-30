function CalcMedia(){
        var Media;
        let Nome = document.getElementById('nome').value;
        let Nota1 = document.getElementById('nota1').value;
        let Nota2 = document.getElementById('nota2').value;
        let Nota3 = document.getElementById('nota3').value;
        
        Nota1 = parseFloat(Nota1);
        Nota2 = parseFloat(Nota2);
        Nota3 = parseFloat(Nota3);

        Media=(((Nota1 + Nota2 + Nota3)/3).toFixed(2));
        toString(Media);

       document.getElementById("Media").value = Media;
}



