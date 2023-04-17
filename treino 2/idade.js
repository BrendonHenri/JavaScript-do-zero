

function iniciar(){
    const dataNascimento = new Date(document.getElementById('idata').value);
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const anoAtual = new Date ().getFullYear();
    const anoDeNascimento = dataNascimento.getFullYear();
    const idade = anoAtual - anoDeNascimento;
    const inputs = document.querySelectorAll('input[type="radio"], input[type="date"]')
    const labels = document.querySelectorAll('label[for^="i"]')
    let pessoa = document.getElementById ('image')
    const botao = document.getElementById ('btn-vai')
    const resposta = document.createElement('p')
    const card = document.getElementById ('card')
    if (sexo === 'masc'){
        inputs.forEach(function(input) {
        input.style.display = 'none'});
        labels.forEach(function(label){
            label.style.display = 'none'
        })
        botao.style.display = 'none'
        pessoa.style.backgroundImage = 'url("imagens/homen-joven.jpg")'
        resposta.innerHTML= `Você tem ${idade} anos e é um um homen.`
        resposta.style.fontSize = "2em";
        card.appendChild(resposta)
        pessoa.style.opacity = "0";
        pessoa.style.transition = "opacity 0.8s ease-in-out";
        setTimeout(function(){
        pessoa.style.opacity = "1";
         }   ,600);
         resposta.style.opacity = "0";
        resposta.style.transition = "opacity 0.8s ease-in-out";
        setTimeout(function(){
        resposta.style.opacity = "1";
        }   ,100);
        
    }
}