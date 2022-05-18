function AreaTriangulo(area,base){
    this.x= area;
    this.y= base;
    this.are = this.x*this.y;
}

obj1 = new AreaTriangulo(10,10);

console.log(obj1.are);

//SUPER CLASSE
function Conta(){
    var Name;
    var bank;
    var NumCont;
    var Sal;

    this.SetNome = function(valor){
        Name = valor;
    }
    this.getNome = function(){
        return Name;
    }


    this.SetBank = function(valor){
        bank = valor;
    }
    this.getBank = function(){
        return bank;
    }

    this.SetNumCont = function(valor){
        NumCont = valor;
    }
    this.getNumCont = function(){
        return NumCont;
    }

    this.SetSal = function(valor){
        Sal = valor;
    }
    this.getSal = function(){
        return Sal;
    }
}


//CORRENTA
function Corrente(){
    Conta.call(this);
    var SalEsp;

    this.setSalEspecial = function(valor){
        SalEsp = valor;
    };  

    this.getSalEspecial = function(){
        return SalEsp;
    };
}


//POUPANÇA
function poupanca(){
    Conta.call(this);
    var Juros;

    this.setJuros = function(valor){
        Juros = valor;
    };

    this.getJuros = function(){
        return Juros;
    };
}

Corrente.prototype = new Conta();
poupanca.prototype = new Conta();

obj2 = new Conta()
obj3 = new Corrente();
obj4 = new poupanca();

obj3.SetNome("Ze Luiz");
obj3.SetBank("Tau");
obj3.SetNumCont(1234);
obj3.SetSal(1000);
obj3.setSalEspecial(500);

obj4.SetNome("Ze Gustavo");
obj4.SetBank("Desco");
obj4.SetNumCont(5678);
obj4.SetSal(2000);
obj4.setJuros(5);

console.log("Nome: " +  obj3.getNome() + "\nBanco: " + obj3.getBank() +"\nConta: " + obj3.getNumCont() + "\nSaldo: " + obj3.getSal() + "\nSaldo Especial:" + obj3.getSalEspecial());


console.log("\nNome: " +  obj4.getNome() + "\nBanco: " + obj4.getBank() +"\nConta: " + obj4.getNumCont() + "\nSaldo: " + obj4.getSal() + "\nJuros:" + obj4.getJuros());

