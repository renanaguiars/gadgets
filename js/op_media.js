const nota1 = document.getElementById('primeira-nota');
    const nota2 = document.getElementById('segunda-nota');
    const botao = document.querySelector('.btn-calc');
    const paragrafo = document.getElementById('result')
    
    function calcularMedia(x, y) {
        if(x < 0 || y < 0){
            alert('Números negativos não são permitidos!')
            nota1.value = '';
            nota2.value = '';
        } else {
            return (parseFloat(x) + parseFloat(y)) / 2;
        }
    }

    function verificaAprovacao(){
        if(calcularMedia(nota1.value, nota2.value) >= 7){
            alert('Aprovado!')
        } else {
            alert('Reprovado! Estude mais!')
        }
    }

    botao.addEventListener('click', () => {
        let res = calcularMedia(nota1.value, nota2.value);
        verificaAprovacao();
        paragrafo.textContent = res.toFixed(2);
    })