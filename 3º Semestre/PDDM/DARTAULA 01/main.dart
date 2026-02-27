void main(){
    String texto = "Alô mundo!";
    int numero = 9999999988888888;
    double n = 3.14;
    bool ativo = false;
    var coisa = 10;//não tipada
    dynamic tudo = "oi";
    print(texto);
    print(numero);
    print("Real = "+ n.toString());//concatenação
    print(ativo?"oi":"tchau");//if ternário
    print(coisa);
    print(tudo);
    tudo = 500;
    print(tudo);
}