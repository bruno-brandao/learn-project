function Salvar() {
       
var input1 = document.getElementById("Campo1").value;
var input2 = document.getElementById("Campo2").value;
var input3 = document.getElementById("Campo3").value   

console.log("valor1", input1)


var obj = {
"input1" :  input1,
"input2" :  input2,
"input3" :  input3,


} 
const eVazio = !Object.values(obj).every(x => (x !== null && x !== ""));
if (eVazio) {
    alert("Digite Algo!!!!")
    return;
}


alert("Campos validados")
console.log("envio de dados", obj);
salvarDados(obj)


}


function salvarDados(obj) {

localStorage.setItem("item", JSON.stringify(obj))

}


function carregarDados() {
let dadosLocalStorage = localStorage.getItem("item")

let dadosFinais = JSON.parse(dadosLocalStorage)

console.log("recuperação dos dados salvos", dadosFinais)
}

function enquanto() {
    var n = 0;
   

    while (n < 100) {
        n++;
        
        var valor_min = 20;
        var valor_max = 40;
        setTimeout(function(){
          verifica_abertura(valor_min, valor_max);
        }, 5000);
    }

   
    
    function verifica_abertura(valor_min, valor_max){
       console.log(valor_min, valor_max)
    }
}