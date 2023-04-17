

function iniciar() {
    const dataNascimento = new Date(document.getElementById('idata').value);
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const anoAtual = new Date().getFullYear();
    const anoDeNascimento = dataNascimento.getFullYear();
    const idade = anoAtual - anoDeNascimento;
    const inputs = document.querySelectorAll('input[type="radio"], input[type="date"]')
    const labels = document.querySelectorAll('label[for^="i"]')
    let pessoa = document.getElementById('image')
    const botao = document.getElementById('btn-vai')
    const resposta = document.createElement('p')
    const card = document.getElementById('card')
    if (sexo === 'masc'){
        inputs.forEach(function (input) {
            input.style.display = 'none'
        });
        labels.forEach(function (label) {
            label.style.display = 'none'
        })
        botao.style.display = 'none'
        let foto;
        if (idade < 18) { foto = 'imagens/menino1.jpg' }
        else if (idade < 50) { foto = 'imagens/homen-joven.jpg' }
        else { foto = 'imagens/senhor.jpg' }
        pessoa.style.backgroundImage = `url("${foto}")`;
        resposta.innerHTML = `Você tem ${idade} anos e é um homen.`
        resposta.style.fontSize = "2em";
        card.appendChild(resposta)
        resposta.style.opacity = "0";
        resposta.style.transition = "opacity 0.8s ease-in-out";
        setTimeout(function () {
            resposta.style.opacity = "1";
        }, 100);
    }
    else  {
        inputs.forEach(function (input) {
            input.style.display = 'none'
        });
        labels.forEach(function (label) {
            label.style.display = 'none'
        })
        botao.style.display = 'none'
        if (idade < 18) { foto = 'imagens/menina.jpg' }
        else if (idade < 50) { foto = 'imagens/mulher-joven.jpg' }
        else { foto = 'imagens/senhora.jpg' }
        pessoa.style.backgroundImage = `url("${foto}")`
        resposta.innerHTML = `Você tem ${idade} anos e é uma mulher.`
        resposta.style.fontSize = "2em";
        card.appendChild(resposta)
        resposta.style.opacity = "0";
        resposta.style.transition = "opacity 0.8s ease-in-out";
        setTimeout(function () {
            resposta.style.opacity = "1";
        }, 100);
    }
}

