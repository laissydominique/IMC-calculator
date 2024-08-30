document.addEventListener("DOMContentLoaded", () => {
  function getResult() {
    const btnCalculate = document.querySelector("#button-calc");

    if (!btnCalculate) {
      console.error("Botão de cálculo não encontrado!");
      return;
    }

    btnCalculate.addEventListener("click", (e) => {

      e.preventDefault();
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
          const valorImc = document.querySelector("#p-valor-imc");
          const afterClick = document.querySelector("#after-click");

          if (resultado <= 18.5) {
            afterClick.innerHTML = `<p style="color: rgb(130, 213, 112); font-size: 1.3rem;margin-bottom: 1rem;">Seu IMC:</p>`;
            valorImc.innerHTML = `<p style="color: white; font-size: 1rem" >Seu IMC é de ${resultado}, Você está <span style="color:rgb(130, 213, 112);font-weight: bold;" >abaixo </span> do peso ideal. É importante buscar a orientação de um profissional de saúde para avaliar sua nutrição e saúde geral.</p>`;
          } else if (resultado >= 18.6 && resultado <= 24.9) {
            afterClick.innerHTML = `<p style="color: rgb(130, 213, 112); font-size: 1.3rem;margin-bottom: 1rem;">Seu IMC:</p>`;
            valorImc.innerHTML = `<p style="color: white; font-size: 1rem">O seu IMC é de ${resultado}. Você está com <span style="color:rgb(130, 213, 112);font-weight: bold;" >peso normal. </span>Continue mantendo uma alimentação equilibrada e prática de atividades físicas.</p>`;
          } else if (resultado < 18.5) {
            afterClick.innerHTML = `<p style="color: rgb(130, 213, 112); font-size: 1.3rem;margin-bottom: 1rem;">Seu IMC:</p>`;
            valorImc.innerHTML = `<p style="color: white; font-size: 1rem">O seu IMC é de ${resultado}. Você está com <span style="color:rgb(130, 213, 112);font-weight: bold;" >baixo peso. </span>É recomendável procurar orientação médica para avaliar sua saúde e considerar ajustes na dieta e estilo de vida.</p>`;
          } else if (resultado >= 18.5 && resultado <= 24.9) {
            afterClick.innerHTML = `<p style="color: rgb(130, 213, 112); font-size: 1.3rem;margin-bottom: 1rem;">Seu IMC:</p>`;
            valorImc.innerHTML = `<p style="color: white; font-size: 1rem">O seu IMC é de ${resultado}. Você está com <span style="color:rgb(130, 213, 112);font-weight: bold;" >peso normal. </span> Mantenha uma alimentação equilibrada e pratique exercícios regularmente para manter sua saúde em dia.</p>`;
          } else if (resultado >= 25 && resultado <= 29.9) {
            afterClick.innerHTML = `<p style="color: rgb(130, 213, 112); font-size: 1.3rem;margin-bottom: 1rem;">Seu IMC:</p>`;
            valorImc.innerHTML = `<p style="color: white; font-size: 1rem">O seu IMC é de ${resultado}. Você está com <span style="color:rgb(130, 213, 112);font-weight: bold;" >sobrepeso. </span>Considerar mudanças na dieta e aumentar a atividade física pode ser benéfico. Consulte um profissional de saúde para orientação.</p>`;
          } else if (resultado >= 30 && resultado <= 34.9) {
            afterClick.innerHTML = `<p style="color: rgb(130, 213, 112); font-size: 1.3rem;margin-bottom: 1rem;">Seu IMC:</p>`;
            valorImc.innerHTML = `<p style="color: white; font-size: 1rem">O seu IMC é de ${resultado}. Você está com <span style="color:rgb(130, 213, 112);font-weight: bold;" >obesidade grau I. </span>É importante procurar orientação médica para desenvolver um plano de tratamento que possa incluir ajustes na dieta e exercícios físicos.</p>`;
          } else if (resultado >= 35 && resultado <= 39.9) {
            afterClick.innerHTML = `<p style="color: rgb(130, 213, 112); font-size: 1.3rem;margin-bottom: 1rem;">Seu IMC:</p>`;
            valorImc.innerHTML = `<p style="color: white; font-size: 1rem">O seu IMC é de ${resultado}. Você está com <span style="color:rgb(130, 213, 112);font-weight: bold;" >obesidade grau II. </span>.É essencial buscar a ajuda de um médico para um plano de tratamento mais intensivo e monitoramento contínuo da saúde.</p>`;
          } else if (resultado >= 40 && resultado <= 49.9) {
            afterClick.innerHTML = `<p style="color: rgb(130, 213, 112); font-size: 1.3rem;margin-bottom: 1rem;">Seu IMC:</p>`;
            valorImc.innerHTML = `<p style="color: white; font-size: 1rem">O seu IMC é de ${resultado}. Você está com <span style="color:rgb(130, 213, 112);font-weight: bold;" >obesidade grau III. </span> É crucial procurar orientação médica urgente para abordar possíveis riscos à saúde e receber suporte adequado.</p>`;
          } else if (resultado >= 50 && resultado <= 59.9) {
            afterClick.innerHTML = `<p style="color: rgb(130, 213, 112); font-size: 1.3rem;margin-bottom: 1rem;">Seu IMC:</p>`;
            valorImc.innerHTML = `<p style="color: white; font-size: 1rem">O seu IMC é de ${resultado}. Você está com <span style="color:rgb(130, 213, 112);font-weight: bold;" >obesidade grau IV. </span> É necessário buscar assistência médica imediata para um plano de tratamento abrangente e avaliação dos riscos associados.</p>`;
          } else if (resultado >= 60) {
            afterClick.innerHTML = `<p style="color: rgb(130, 213, 112); font-size: 1.3rem;margin-bottom: 1rem;">Seu IMC:</p>`;
            valorImc.innerHTML = `<p style="color: white; font-size: 1rem">O seu IMC é de ${resultado}. Você está com <span style="color:rgb(130, 213, 112);font-weight: bold;" >obesidade grau V. </span>Procure assistência médica urgente para tratamento intensivo e avaliação dos riscos graves para sua saúde.</p>`;
          } else {
            valorImc.innerHTML = `<p>Não foi possível calcular o IMC. Certifique-se de que todos os valores foram inseridos corretamente e tente novamente.</p>`;
          }
        }
      } else {
        alert("Insira todos os campos corretamente!");
      }
    });
  }
  getResult();
});
