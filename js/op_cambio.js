const reais = document.getElementById('reais');
    const cotacao = document.getElementById('cotacao');
    const botao = document.querySelector('.btn-calc');
    const paragrafo = document.getElementById('result')
    
    function converter(v, c) {
        if(v <= 0 || c <= 0){
            alert('Números negativos não são permitidos!')
            reais.value = '';
            cotacao.value = '';
        } else {
            let res = parseFloat(v) / parseFloat(c);
            return res;
        }  
    }

    botao.addEventListener('click', () => {
        let resultado = converter(reais.value, cotacao.value);
        paragrafo.textContent = resultado.toFixed(2) + ' dólares';
    })
