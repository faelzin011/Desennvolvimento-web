var produtos = [
    {
        nome: "bolo de morango",
        descricao: "Melhor bolo do mundo",
        preco: 1000
    },
    {
        nome: "Bolo de chocolate",
        descricao: "Bolo bom",
        preco: 290
    },
    {
        nome: "Bolo de limao",
        descricao: "Bolo gostoso",
        preco: 2022
    }
]

var conteudoPrincipal = document.getElementById('conteudo-principal')

for (var produto of produtos) {
    var conteudoProduto = document.createElement('div')
        conteudoProduto.className = 'conteudo-produto'

        conteudoPrincipal.appendChild(conteudoProduto)
}