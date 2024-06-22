document.getElementById('filme').value = ''; // Limpa o campo de entrada antes

function adicionarFilme() {
    const filmeInput = document.getElementById('filme');
    const filmeFavorito = filmeInput.value.trim(); // Remove espaços em branco
    const elementoListaFilmes = document.getElementById('listaFilmes');

    // Validação da URL (simplificada)
    if (!filmeFavorito.startsWith("http")) {
        alert("Por favor, insira uma URL válida de imagem.");
        return;
    }

    const novoFilme = document.createElement('img');
    novoFilme.src = filmeFavorito;
    novoFilme.alt = "Poster do Filme"; // Adiciona texto alternativo

    elementoListaFilmes.appendChild(novoFilme); 
}
