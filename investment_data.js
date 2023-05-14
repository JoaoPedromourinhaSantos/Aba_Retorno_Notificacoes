
  // Definir a função para atualizar os dados de teste mock/fake
function atualizarInvestimentos() {
    // Gerar valores aleatórios para cada tipo de investimento
    var GE = Math.floor(Math.random() * 6000);
    var Dis = Math.floor(Math.random() * 2000);
    var NKE = Math.floor(Math.random() * 1720);
    var BA = Math.floor(Math.random() * 4000);
    var CE = Math.floor(Math.random() * 4000);
  
    // Atualizar os valores dos dados de teste mock/fake no HTML
    document.getElementById("GE").innerHTML = GE;
    document.getElementById("Dis").innerHTML = Dis;
    document.getElementById("NKE").innerHTML = NKE;
    document.getElementById("BA").innerHTML = BA;
    document.getElementById("CE").innerHTML = CE;
  }
  
  // Executar a função para atualizar os dados de teste mock/fake a cada 5 segundos
  setInterval(atualizarInvestimentos, 3000);