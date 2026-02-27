class Animal{
    //Atributos
    int id=0;
    String nome="";
    String especie="";
    String raca="";
    double peso=0.0;
    //Metodos
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
    //instancia
    Animal boi;
    //objeto
    boi = new Animal();
    boi.id = 1;
    boi.nome = "Bandido";
    boi.especie = "Bovino";
    boi.raca = "Nelori";
    boi.peso = 499.9;
    print(boi.tudoJunto());
}