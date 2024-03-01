const num = document.getElementById('num');
const titulo = document.querySelector('h1');
const subtitulo = document.querySelector('h4');
const botao = document.querySelector('.btn-calc');
const paragrafo = document.getElementById('result')
    
    function exibirTabuada(n) {
        let arrTabuada = []; 
        if(n <= 0) {
            return 'Número menor ou igual a zero. Refaça a operação.'
        } else {
            for(let i = 1; i <= 10; i++) {
                let str = `${n} x ${i} = ${n*i} &nbsp <br>`;
                arrTabuada.push(str);
            }
            let myRes = arrTabuada.toString()
            let myResFormatado = myRes.replaceAll(",", " ")
            return myResFormatado;
        }
    }

    botao.addEventListener('click', () => {
        let resultado = exibirTabuada(num.value);
        esconderElementos();
        paragrafo.innerHTML = resultado;
    })

    function esconderElementos() {
        titulo.setAttribute('hidden', true);
        subtitulo.setAttribute('hidden', true);
    }