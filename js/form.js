

// acesso aos campos de input do form
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault()
  // acessando a classe form com os inputs e suas tags html nome,peso,altura ,gordura com os seus respectivos valores
  var form = document.querySelector("#form-adiciona")
  var paciente = obtemPacientedoFormulario(form);


  var erros = validaPaciente(paciente);
  console.log(erros)
  if (erros.length > 0) {
    exibeMensagensdeErro(erros);
    return;

  }


  //adicionando o paciente na tabela
  addpacienteNaTabela(paciente);

  //----------apagar campos do formulário após preenchimento.
  form.reset();
  var apagarform = document.querySelector("#mensagems-erro");
  apagarform.innerHTML = "";


  //variáveis recebem seus valores do form names com seus valores
  //extraindo informações dos pacientes
  /* var nome = form.nome.value;
   var peso = form.peso.value;
   var altura = form.altura.value;
   var gordura = form.gordura.value;*/

  // variavel pacientetr recebe o elemento tr criado com o método createElement();
  //criando as trs e as
  //var pacienteTr = document.createElement("tr")

  // as variaveis recebem suas td´s criadas
  /*var nometd = document.createElement("td")
  var pesotd = document.createElement("td")
  var alturatd = document.createElement("td")
  var gorduratd = document.createElement("td")
  var imctd = document.createElement("td")*/

  //preenchendo as <tds> com o seu conteudo tipo texto text.Content e seus valores.
  /*nometd.textContent = nome;
  pesotd.textContent = peso;
  alturatd.textContent = altura;
  gorduratd.textContent = gordura;
  // chamei a função calcula imc no meu conteudo imctd.
  imctd.textContent = calculaImc(peso, altura);*/


  //posicionar as <tds> elementos  dentro de cada <tr>
  /* pacienteTr.appendChild(nometd);
   pacienteTr.appendChild(pesotd);
   pacienteTr.appendChild(alturatd);
   pacienteTr.appendChild(gorduratd);
   pacienteTr.appendChild(imctd);*/

  //adicionando na minha tabela as informações do novo paciente e sua html


});
// adicionando outro estrutura de pacientes
function addpacienteNaTabela(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

}

function exibeMensagensdeErro(erros) {
  var ul = document.querySelector("#mensagems-erro")
  ul.innerHTML = "" // controle de itens do html zerando os itens  

  erros.forEach(function (erro) {
    var li = document.createElement("li")//cria a tag <li>
    li.textContent = erro;//li recebe o conteudo erro
    ul.appendChild(li);//adiciona dentro da tag <ul> a tag <li>
  });
}

function obtemPacientedoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;

}
function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add('paciente');

  //------------------------------//dado        //classe
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
  /* var nometd = document.createElement("td");
   var pesotd = document.createElement("td");
   var alturatd = document.createElement("td");
   var gorduratd = document.createElement("td");
   var imctd = document.createElement("td");
 
   nometd.textContent = paciente.nome;
   pesotd.textContent = paciente.peso;
   alturatd.textContent = paciente.altura;
   gorduratd.textContent = paciente.gordura;
   imctd.textContent = paciente.imc; // aqui tem o calculo do imc que vem da propriedade imc do OBJETOpaciente*/
}

//função que valida paciente 
function validaPaciente(paciente) {
  var erros = [];//array vazio

  if (paciente.nome.length == 0) { // outra forma if (paciente.nome == "") aqui estou dizendo que paciente.nome for vazio o array erros recebe a string ("Nome em branco")
    erros.push("Nome em branco")
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido")//empurrando string no meu array de erros
  }

  if (!validaAltura(paciente.altura)) {
    erros.push("altura é inválida !")
  }
  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco")
  }
  if (paciente.peso.length == 0) {
    erros.push("o peso não pode ser em branco")
  }
  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco")
  }

  return erros;
}



