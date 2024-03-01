const celsius = document.getElementById('celsius');
    const botao = document.querySelector('.btn-calc');
    const paragrafo = document.getElementById('result')
    
    function converterTemperatura(c) {
         let f = (c * 1.8) + 32;
         return f;
    }

    botao.addEventListener('click', () => {
        let resultado = converterTemperatura(celsius.value);
        paragrafo.textContent = resultado.toFixed(1);
    })