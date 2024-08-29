document.addEventListener("DOMContentLoaded", () => {
  const result = document.querySelector(".result");

  function advanceButton() {
    const btnAvancar = document.querySelector(".btn-avancar");
    const headerContent = document.querySelector(".header-content");
    const calculator = document.querySelector(".calculator");

    btnAvancar.addEventListener("click", () => {
      headerContent.classList.add("hidden");
      calculator.classList.remove("hidden");
    });
  }

  function backButton() {
    const btnBack = document.querySelector(".btn-back");
    
    btnBack.addEventListener("click", () => {
      const headerContent = document.querySelector(".header-content");
      const calculator = document.querySelector(".calculator");
      headerContent.classList.remove("hidden");
      calculator.classList.add("hidden");
    });
  }

  function getResult() {
    const headerContent = document.querySelector(".header-content");
    const calculator = document.querySelector(".calculator");
    const btnCalculate = document.querySelector(".btn-calculate");

    btnCalculate.addEventListener("click", () => {
      const weightInput = document.querySelector(".weight-input");
      const heightInput = document.querySelector(".height-input");

      if (weightInput.value && heightInput.value) {
        if (
          !isNaN(weightInput.value) &&
          !isNaN(heightInput.value) &&
          weightInput.value <= 300 &&
          heightInput.value <= 300
        ) {
          const weight = parseFloat(weightInput.value);
          const height = parseFloat(heightInput.value);
          const calculo = (weight / (height * height)) * 10000;
          const resultado = calculo.toFixed(1);
          const valorImc = document.querySelector('.p-valor-imc');

          if (resultado <= 18.5) {
            valorImc.innerHTML = `<p>Seu IMC é de ${resultado}, Você está <span>abaixo </span> do peso ideal. É importante buscar a orientação de um profissional de saúde para avaliar sua nutrição e saúde geral.</p>`;
          } else if (resultado >= 18.6 && resultado <= 24.9) {
            valorImc.innerHTML = `<p>O seu IMC é de ${resultado}. Você está com <span>peso normal </span>. Continue mantendo uma alimentação equilibrada e prática de atividades físicas.</p>`;
          } else if (resultado < 18.5) {
            valorImc.innerHTML = `<p>O seu IMC é de ${resultado}. Você está com <span>baixo peso </span>. É recomendável procurar orientação médica para avaliar sua saúde e considerar ajustes na dieta e estilo de vida.</p>`;
          } else if (resultado >= 18.5 && resultado <= 24.9) {
            valorImc.innerHTML = `<p>O seu IMC é de ${resultado}. Você está com <span>peso normal </span>. Mantenha uma alimentação equilibrada e pratique exercícios regularmente para manter sua saúde em dia.</p>`;
          } else if (resultado >= 25 && resultado <= 29.9) {
            valorImc.innerHTML = `<p>O seu IMC é de ${resultado}. Você está com <span>sobrepeso </span>. Considerar mudanças na dieta e aumentar a atividade física pode ser benéfico. Consulte um profissional de saúde para orientação.</p>`;
          } else if (resultado >= 30 && resultado <= 34.9) {
            valorImc.innerHTML = `<p>O seu IMC é de ${resultado}. Você está com <span>obesidade grau I </span>. É importante procurar orientação médica para desenvolver um plano de tratamento que possa incluir ajustes na dieta e exercícios físicos.</p>`;
          } else if (resultado >= 35 && resultado <= 39.9) {
            valorImc.innerHTML = `<p>O seu IMC é de ${resultado}. Você está com <span>obesidade grau II </span>. É essencial buscar a ajuda de um médico para um plano de tratamento mais intensivo e monitoramento contínuo da saúde.</p>`;
          } else if (resultado >= 40 && resultado <= 49.9) {
            valorImc.innerHTML = `<p>O seu IMC é de ${resultado}. Você está com <span>obesidade grau III </span>. É crucial procurar orientação médica urgente para abordar possíveis riscos à saúde e receber suporte adequado.</p>`;
          } else if (resultado >= 50 && resultado <= 59.9) {
            valorImc.innerHTML = `<p>O seu IMC é de ${resultado}. Você está com <span>obesidade grau IV </span>. É necessário buscar assistência médica imediata para um plano de tratamento abrangente e avaliação dos riscos associados.</p>`;
          } else if (resultado >= 60) {
            valorImc.innerHTML = `<p>O seu IMC é de ${resultado}. Você está com <span>obesidade grau V </span>. Procure assistência médica urgente para tratamento intensivo e avaliação dos riscos graves para sua saúde.</p>`;
          } else {
            valorImc.innerHTML = `<p>Não foi possível calcular o IMC. Certifique-se de que todos os valores foram inseridos corretamente e tente novamente.</p>`;
          }
          headerContent.classList.add("hidden");
          calculator.classList.add("hidden");
          result.classList.remove("hidden");
        }
      }
    });
  }
advanceButton();
backButton();
getResult();

});
