document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');
    const iconeContraste = document.getElementById('icone-contraste');

    let tamanhoAtualFonte = 1;
    const tamanhoMaximo = 2;
    const tamanhoMinimo = 0.7;

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    aumentaFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte < tamanhoMaximo) {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(1)}rem`;
        }
    });

    diminuiFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > tamanhoMinimo) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte.toFixed(1)}rem`;
        }
    });

    alternaContraste.addEventListener('click', function () {
        document.body.classList.toggle('alto-contraste');

        if (iconeContraste.classList.contains('bi-moon-fill')) {
            iconeContraste.classList.remove('bi-moon-fill');
            iconeContraste.classList.add('bi-brightness-high-fill');
        } else {
            iconeContraste.classList.remove('bi-brightness-high-fill');
            iconeContraste.classList.add('bi-moon-fill');
        }
    });

    // ScrollReveal
    ScrollReveal().reveal('#inicio', { delay: 500 });
    ScrollReveal().reveal('#tropicalia', { delay: 500 });
    ScrollReveal().reveal('#galeria', { delay: 500 });
    ScrollReveal().reveal('#contato', { delay: 500 });
});
