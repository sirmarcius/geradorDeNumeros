/* Este é o código javascript que gera um número aleatório 
entre 1 e um número máximo dado como parâmetro */

function gerarNumeroAleatorio(maximo) {
    // gera um número aleatório entre 1 e o máximo
    var numero = Math.floor(Math.random() * maximo) + 1; 
    return numero; // retorna o número gerado
  }

  // Esta é uma função que é chamada quando o botão é clicado
  function sortear() {
    // pega o valor do campo de entrada com id "maximo"
    var maximo = document.getElementById("maximo").value; 
    // chama a função gerarNumeroAleatorio com o valor do campo de entrada
    var sorteado = gerarNumeroAleatorio(maximo); 
    // mostra o número sorteado no parágrafo com id "resultado"
    document.getElementById("resultado").innerHTML = "O número sorteado foi " + sorteado; 
  }
