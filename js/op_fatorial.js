const numero = document.getElementById('fatorial');
    const botao = document.querySelector('.btn-calc');
    const paragrafo = document.getElementById('result')
    
    function calcularFatorial(x) {
        if(x < 0){
            alert('Números negativos não são permitidos!')
            numero.value = '';
        } else {
            if(x == 0) {
                return 1;
            } else {
                let res = 1;
                for(let i = x; i > 0; i--) {
                    res *= i; 
                }
                return parseInt(res);
            }  
        }  
    }

    botao.addEventListener('click', () => {
        let resultado = calcularFatorial(numero.value);
        paragrafo.textContent = resultado;
    })