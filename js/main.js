/*var lista = ["maçã", "pera", "laranja"];
lista.push("uva");
console.log(lista);
console.log(lista[0]);
console.log(lista.toString()[0]);
console.log(lista.join("-"));


var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta);

var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"rosa"}]
console.log(frutas[1].nome);

var idade = prompt("Qual sua idade");
if(idade >= 18){
    alert("maior de iade");
} else {
    alert("menor de idade");
}
*/
/*var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
};
*/
/*var count;
for(count=0; count <= 5 ; count++){
    console.log(count);
};*/
/*
function soma(n1, n2){
    return n1 + n2;
}
*/
/*function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome)
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));*/
/*var validar = 0;
function validaIdade(idade){
    
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    } 
    return validar;
    
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obriago por clicar");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/");
   // window.location.href = "https://web.digitalinnovation.one/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}