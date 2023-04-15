var agora = new Date()
var diaSemana = agora.getDay()
 switch (diaSemana){
    case 0: console.log('hoje é domingo')
    break
    case 1: console.log('hoje é segunda')
    break
    case 2: console.log('hoje é terça')
    break
    case 3: console.log('hoje é quarta')
    break
    case 4: console.log('hoje é quinta')
    break
    case 5: console.log('hoje é sexta')
    break
    case 6: console.log('hoje é sabado')
    break
 }
 var hora = agora.getFullYear()
 console.log (`você está vivendo ${hora}  `)