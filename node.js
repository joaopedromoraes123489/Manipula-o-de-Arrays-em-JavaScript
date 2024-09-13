document.addEventListener('DOMContentLoaded', () => {
    fetch('notas.json')
        .then(response => response.json())
        .then(data => {
            let notas = data.notas;

            // Acesso aos Elementos
            console.log("Primeira nota:", notas[0]); // Exibe a primeira nota
            console.log("Última nota:", notas[notas.length - 1]); // Exibe a última nota

            // Adicionar uma nova nota
            notas.push(10.0);
            console.log("Array após adicionar nova nota:", notas); // Exibe o array após adicionar a nota

            // Remover a primeira nota
            notas.shift();
            console.log("Array após remover a primeira nota:", notas); // Exibe o array após remover a primeira nota

            // Iteração com forEach
            let notasDiv = document.getElementById('notas');
            notasDiv.innerHTML = '<h2>Notas:</h2>';
            notas.forEach((nota, index) => {
                notasDiv.innerHTML += `<p>Nota ${index + 1}: ${nota}</p>`; // Exibe cada nota com o índice
            });

            // Cálculo da Média
            let soma = notas.reduce((acc, nota) => acc + nota, 0);
            let media = soma / notas.length;
            console.log("Média das notas:", media); // Exibe a média das notas

            // Filtro de Notas
            let notasMaioresQue7 = notas.filter(nota => nota > 7);
            console.log("Notas maiores que 7:", notasMaioresQue7); // Exibe notas maiores que 7

            // Ordenação
            notas.sort((a, b) => a - b);
            console.log("Array ordenado:", notas); // Exibe o array ordenado em ordem crescente

            // Busca de Elementos
            let temNota6_5 = notas.includes(6.5);
            console.log("Nota 6.5 está presente no array?", temNota6_5); // Verifica se a nota 6.5 está presente

            // Encontrar o Índice
            let indiceNota8_0 = notas.indexOf(8.0);
            console.log("Índice da nota 8.0:", indiceNota8_0); // Exibe o índice da nota 8.0

            // Mapeamento
            let notasQuadrado = notas.map(nota => nota ** 2);
            console.log("Notas ao quadrado:", notasQuadrado); // Exibe as notas elevadas ao quadrado

            // Exibir resultados
            let resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <h2>Resultados:</h2>
                <p>Média das notas: ${media}</p>
                <p>Notas maiores que 7: ${notasMaioresQue7}</p>
                <p>Array ordenado: ${notas}</p>
                <p>Nota 6.5 está presente? ${temNota6_5}</p>
                <p>Índice da nota 8.0: ${indiceNota8_0}</p>
                <p>Notas ao quadrado: ${notasQuadrado}</p>
            `;
        })
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);
        });
});
