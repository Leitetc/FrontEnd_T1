function capturarInformacoesPacote(event) {
    const roteiroViagem = event.target.closest('.roteiros-viagens');
    const destino = roteiroViagem.querySelector('.roteiro-destino h3').innerText;
    const inclusos = Array.from(roteiroViagem.querySelectorAll('.roteiro-incluso li')).map(li => li.innerText);
    const preco = roteiroViagem.querySelector('.roteiro-preco').innerText;
    const obs = roteiroViagem.querySelector('.roteiro-obs').innerText;
    const parcelamento = roteiroViagem.querySelector('.roteiro-parcelamento').innerText;

    const pacoteTuristico = {
        destino,
        inclusos,
        preco,
        obs,
        parcelamento
    };

    console.log(JSON.stringify(pacoteTuristico));
}

document.addEventListener('DOMContentLoaded', function () {
    const botoesComprar = document.querySelectorAll('.roteiro-comprar');
    botoesComprar.forEach(botao => {
        botao.addEventListener('click', capturarInformacoesPacote);
    });
});