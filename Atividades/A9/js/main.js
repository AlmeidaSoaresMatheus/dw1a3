function aplicaFiltro(filtro, rangeId, valorId, unidade) {
    var range = document.getElementById(rangeId);
    var valor = document.getElementById(valorId);
    var imagem = document.getElementById("blur");

    var valorFiltro = range.value + unidade;
    imagem.style.filter = filtro + "(" + valorFiltro + ")";
    valor.value = valorFiltro;
}