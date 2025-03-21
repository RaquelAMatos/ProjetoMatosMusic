const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const formulario = document.getElementById("formulario");

  function exibirMensagemErro(mensagem) {
      let mensagemErro = document.querySelector(".mensagemErro");

      // Verifica se a mensagem de erro não existe ainda e cria
      if (!mensagemErro) {
          mensagemErro = document.createElement("p");
          mensagemErro.classList.add("mensagemErro");
          let btn = document.getElementById("button");
          if (btn) {
              btn.before(mensagemErro);  // Insere a mensagem antes do botão
          }
      }

      // Se houver mensagem, atualize ou remova
      mensagemErro.textContent = mensagem;
  }

  formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();  // Impede o envio real do formulário

      let nome = nomeInput.value;
      let email = emailInput.value;

      // Limpar mensagens de erro antes da validação
      exibirMensagemErro("");

      let erro = false;

      // Verificação dos campos
      if (nome === "" && email === "") {
          exibirMensagemErro("Preencha todos os campos");
          nomeInput.focus();
          erro = true;
      }

      if (nome === "" && !erro) {
          exibirMensagemErro("Digite um nome");
          nomeInput.focus();
          erro = true;
      }

      if (nome !== "" && !validarNome(nome) && !erro) {
          exibirMensagemErro("Digite um nome válido");
          nomeInput.focus();
          erro = true;
      }

      if (email === "" && !erro) {
          exibirMensagemErro("Digite um e-mail");
          emailInput.focus();
          erro = true;
      }

      if (email !== "" && !validarEmail(email) && !erro) {
          exibirMensagemErro("Digite um e-mail válido");
          emailInput.focus();
          erro = true;
      }

      const checkboxes = document.querySelectorAll('input[name="cursos"]:checked');
      if (checkboxes.length === 0 && !erro) {
          exibirMensagemErro("Por favor, selecione pelo menos uma opção.");
          erro = true;
      }

      // Se não houver erro, exibir a mensagem de sucesso e a mensagem adicional
      if (!erro) {
         exibirMensagemErro("Formulário para estudo, não envia dados para nenhum servidor.");
      }
  });

  // Função para validar nome
  function validarNome(nome) {
      const regexNome = /^[a-zA-Z\s]+$/; 
      return regexNome.test(nome);
  }

  // Função para validar email
  function validarEmail(email) {
      // Ajuste no regex para permitir domínios com mais de 24 caracteres
      const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return regexEmail.test(email);
  }

  // Validação enquanto o usuário digita
  nomeInput.addEventListener("input", function () {
      if (nomeInput.value !== "" && validarNome(nomeInput.value)) {
          exibirMensagemErro("");
      }
  });

  emailInput.addEventListener("input", function () {
      if (emailInput.value !== "" && validarEmail(emailInput.value)) {
          exibirMensagemErro("");
      }
  });