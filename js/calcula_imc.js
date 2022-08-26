
/*var tituloT = document.querySelector('.titulo')// variavel tituloT RECEBE classe html
tituloT.textContent = 'Aparecida Nutricionista'// variavél tituloT com seu conteudo recebe outro.*/

/*tituloT.addEventListener("click", mostramsg)
function mostramsg() {
  console.log('olá eu cliquei')
}*/



/*adicionar itens
var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault()
  console.log(botaoAdicionar);
});
*/


// pegando informações do html e todas as classes com querySelectorAll.
var pacientes = document.querySelectorAll('.paciente')


for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]//aqui a variavel paciente está recebendo o valor do array pacientes com suas posições

  var tdpeso = paciente.querySelector('.info-peso')
  var tdaltura = paciente.querySelector('.info-altura')
  var tdimc = paciente.querySelector('.info-imc')

  // pegando os elementos html com somente o seu conteudo através do (TextContent)
  var peso = tdpeso.textContent
  var altura = tdaltura.textContent


  //verificação
  var pesoValido = validaPeso(peso)
  var alturaValida = validaAltura(altura)


  if (!pesoValido) {
    pesoValido = false
    // tdimc.textContent = 'peso inválido'
    tdpeso.textContent = 'peso inválido'
    tdimc.textContent = 'imc não calculado'
    //aqui estou adicionando a classe *css(paciente-invalido) com a propriedade classList.add(nome-classe)
    paciente.classList.add('paciente-invalido')
  }

  if (!alturaValida) {
    alturaValida = false
    //tdimc.textContent = 'altura Inválido'
    tdaltura.textContent = 'altura inválida'
    tdimc.textContent = 'imc não calculado'
    paciente.classList.add('paciente-invalido')
  }

  //verificação do peso e altura os dois sendo válidos ele calcula. com o operador E &&
  if (pesoValido && alturaValida) {
    var imc = calculaImc(peso, altura)
    tdimc.textContent = imc
  }
}
function validaPeso(peso) {
  if (peso >= 0 && peso < 1000) {
    return true;
  } else {
    return false;
  }
}
function validaAltura(altura) {
  if (altura >= 0 && altura <= 3.0) {
    return true;
  } else {
    return false;
  }
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);


}













 //exemplo -02
/*var vendas = 10
var clientesAbordados = 25
var mediaTentativasPorCliente = 4

var taxa = 0

taxa = vendas / (clientesAbordados * mediaTentativasPorCliente)
console.log(taxa)*/




