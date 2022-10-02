const fields = document.querySelectorAll("[required]");
console.log(fields);

function customValidation(event) {
  const field = event.target;

  // Lógica para verificar se há erros
  function verifyErrors() {
    let foundError = false;

    for (let error in field.validity) {
      if (error !== "customError" && field.validity[error]) {
        foundError = error;
      }
    }

    return foundError;
  }

  const error = verifyErrors();
  console.log(`Error exists: ${error}.`);

  if (error) {
    // Trocar mensagem de required
    field.setCustomValidity("Você precisa preencher esse campo");
  } else {
    field.setCustomValidity("");
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  console.log("Enviar o formulário!");

  // Não vai enviar o formulário (previne o comportamento padrão de um componente)
  event.preventDefault();
});
