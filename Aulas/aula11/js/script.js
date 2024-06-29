let inputValorBruto = document.getElementById('valor-bruto')
let inputValorliquido = document. getElementById('valor-iquido')
let butao = document.getElementById('btn-calcular')
let taxa = 200

 //inputValorBruto.addEventListener('blur', () =>{   
 //})

botao.addEventListener('click', () => {
    let valorBruto = Number(inputValorBruto.value)
    inputValorliquido.value = valorBruto - taxa
})