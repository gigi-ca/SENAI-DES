class Animal{
    //Atributos
    int id=0;
    String nome="";
    String especie="";
    String raca="";
    double peso= 0.0;
    //Metodos
    Animal(this.id, this.nome, this.especie, this.raca, this.peso);
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
    //instancia
    Animal boi = new Animal(1, "Bandido", "Bovino", "Nelori", 499.9);
    Animal gato = new Animal(2, "Miau", "Felino", "Persa", 2.4);
    Animal cachorro = new Animal(3, "Caramelo", "Canino", "Pastor Alemão", 10.3);
    Animal cavalo = new Animal(4, "Estrela", "Equus ferus", "Belga", 420);
    print(boi.tudoJunto());
    print(gato.tudoJunto());
    print(cachorro.tudoJunto());
    print(cavalo.tudoJunto());
}