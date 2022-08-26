var botaoAdicionar = document.querySelector("#buscar-pacientes")
botaoAdicionar.addEventListener("click", function () {
  // trabalhando com api
  console.log("buscando pacientes.....")

  // a variavel recebe minha requisição do tipo http 
  var xhr = new XMLHttpRequest();
  // uso a função open para abrir o método  "Get" e pegar a url 
  xhr.open("GET", " https://api-pacientes.herokuapp.com/pacientes");

  // evento de carregamento da resposta load e logo depois imprimi no console  a resposta de texto
  xhr.addEventListener("load", function () {
    var erroAjax = document.querySelector("#erro-ajax")
    if (xhr.status == 200) {
      erroAjax.classList.add("invisivel")
      var resposta = xhr.responseText;
      //console.log(typeof resposta)
      // JSON.PARSE SERVE PARA CONVERTER O TEXTO STRING EM OBJETO
      var pacientes = JSON.parse(resposta)
      console.log(typeof pacientes)

      pacientes.forEach(function (paciente) {
        addpacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status)
      console.log(xhr.responseText)

      erroAjax.classList.remove("invisivel")


    }

  });
  //envio da requisição
  xhr.send()
})