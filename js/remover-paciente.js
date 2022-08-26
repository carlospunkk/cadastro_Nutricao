var pacientes = document.querySelectorAll(".paciente");


/*pacientes.forEach(function (cada_paciente) {
  cada_paciente.addEventListener("dblclick", function () {
    //console.log("fui clicado com double click")
    this.remove();
    //  utilizamos o "this" está atrelado a variavel cada_paciente 
    // utilizamos o remove() para remover o elemento

  });

});*/
// a propriedade event.target indica aonde foi clicado dentro da minha função anonima.
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
  //var alvoEvento = event.target;//alvo
  //var paiDoalvo = alvoEvento.parentNode;// alvo + pai 


  //adicionando a classe fadeOut do CSS para colocar o efeito de esmaiecer
  event.target.parentNode.classList.add("fadeOut")

  //função setTimeout apaga a linha em tantos segundos 500
  setTimeout(function () {
    event.target.parentNode.remove();//apaga linha a linha
  }, 500)



}); 
