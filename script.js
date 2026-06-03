function calcularImpacto() {
    // Captura o valor digitado pelo usuário
    const quantidadeArvores = document.getElementById("arvores-input").value;
    
    // Validação simples para garantir que o usuário digitou um número válido
    if (quantidadeArvores === "" || quantidadeArvores <= 0) {
        alert("Por favor, digite uma quantidade válida de árvores superiores a zero.");
        return;
    }

    // Cálculos fictícios baseados em médias ecológicas gerais por árvore ao ano:
    // 1 árvore produz oxigênio para cerca de 2 pessoas por ano.
    // 1 árvore ajuda a reter e filtrar cerca de 1.000 litros de água da chuva ao ano.
    // 1 árvore absorve cerca de 22 kg de CO₂ ao ano.
    const oxigênioGerado = quantidadeArvores * 2;
    const aguaRetida = quantidadeArvores * 1000;
    const co2Absorvido = quantidadeArvores * 22;

    // Atualiza os elementos de texto na página com os resultados formatados
    document.getElementById("oxigenio").innerText = oxigênioGerado.toLocaleString('pt-BR');
    document.getElementById("agua").innerText = aguaRetida.toLocaleString('pt-BR');
    document.getElementById("co2").innerText = co2Absorvido.toLocaleString('pt-BR');

    // Remove a classe 'hidden' para tornar a caixa de resultado visível
    document.getElementById("resultado").classList.remove("hidden");
}