var campodeFiltro = document.querySelector("#filtrar-tabela")

// evento de filtrar 
campodeFiltro.addEventListener("input", function () {
  //posso usar tanto o this quanto a variavel campodeFiltro.value; para buscar os inputs digitados.
  //console.log(this.value);


  // buscando a classe de pacientes 
  var pacientes = document.querySelectorAll(".paciente");
  //interando o array dos pacientes

  //verficando se tem algo digitado.
  if (this.value.length > 0) {
    for (var i = 0; i < pacientes.length; i++) {
      // a variavel paciente recebe o array nas suas posições
      var paciente = pacientes[i]
      // aqui estou acessando o td info-nome da classe paciente
      var tdNome = paciente.querySelector(".info-nome")
      // aqui estou buscando o conteúdo text content 
      var nome = tdNome.textContent;

      // expressão regular
      var expressao = new RegExp(this.value, "i"); //opção "i" aceita buscar por maiusculo ou minusculo "insensitive" ou "sensitive"
      if (!expressao.test(nome)) {//retorna verdadeiro ou falso.

        // deixa invisivel 
        paciente.classList.add("invisivel")
      } else {
        //deixa visivel
        paciente.classList.remove("invisivel")
      }
    }

  } else {
    for (var i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel")
    }
  }
});
