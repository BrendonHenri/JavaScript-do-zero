function iniciar(){
let inicio = parseInt(document.getElementById('icont').value );
let fim = parseInt(document.getElementById ('ifim'). value);
let passo = parseInt(document.getElementById ('ipasso').value);

const card = document.getElementById ('card');
    for (let i = inicio; i <= fim; i += passo) {
        let contagem = document.createElement ('p')
        card.appendChild(contagem);  
        contagem.style.display = 'inline'
        contagem.style.overflow = 'auto'
        contagem.innerHTML += `&#128073 ${i} ,` ;
        let bot = document.getElementById ('btn-vai')
        bot.style.display = 'none'
    }
    let emoji = document.createElement('p');
    card.appendChild(emoji);
    emoji.innerHTML = '&#127942;';
    emoji.style.display = 'inline-block';    
}