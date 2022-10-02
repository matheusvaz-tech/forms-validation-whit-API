const fields = document.querySelectorAll("[required]");
console.log(fields);

function customValidation(event) {
  const field = event.target;

  // Lógica para verificar se há erros
  function verifyErrors() {
    let foundError = false;

    for (error in field.validity) {
      if (error != "customError") {
        field.validity[error];
      }
    }

    return foundError;
  }

  verifyErrors();

  // Trocar mensagem de required
  field.setCustomValidity("Você precisa preencher esse campo");
}

for (field of fields) {
  field.addEventListener("invalid", customValidation);
}

document.querySelector("form").addEventListener("submit", (event) => {
  console.log("Enviar o formulário!");

  // Não vai enviar o formulário (previne o comportamento padrão de um componente)
  event.preventDefault();
});
