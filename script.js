$(document).ready(function () {
  $("#telefone").mask("(00)00000-0000", { placeholder: "(00) 0000-0000" });

  $("form").validate({
    rules: {
      nome: { required: true },
      email: { required: true, email: true },
      mensagem: { required: true },
    },
    messages: {
      nome: "Campo obrigatório",
      email: "Campo obrigatório",
      cpf: "Campo obrigatório",
    },
    submitHandler: function (form) {
      alert("Menssagem enviada");
    },
    invalidHandler: function (event, validator) {
      let camposIncorretos = validator.numberOfInvalids();
      if (camposIncorretos) {
        alert("Existem campos incorretos");
      }
    },
  });
});
