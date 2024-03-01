const lado = document.getElementById('lado');
    const botao = document.querySelector('.btn-calc');
    const paragrafo = document.getElementById('result')
    
    function calcularPerimetro(x) {
        if(x < 0){
            alert('Números negativos nem zero não são permitidos!')
            numero.value = '';
        } else {
                return parseInt(x*4);
            }  
    }

    botao.addEventListener('click', () => {
        let resultado = calcularPerimetro(lado.value);
        paragrafo.textContent = resultado;
    })