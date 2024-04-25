const personagens= document.querySelectorAll('.personagem')

personagens.forEach((personagem) =>{
    personagem.addEventListener('mouseenter', ()=>{

        if(window.innerWidth<450){
            window.scrollTo({top:0, behavior:'smooth'})
        }

    removerSelecaoDoPersonagem()

    adicionarSelecaoDoPersonagem(personagem)

    aletrarImagemDePersonagemSelecionado(personagem)

    alterarNomeDopersonagemSelecionado(personagem)

    alterarDescricaoDoPersonagemSelecionado(personagem)
})

})


function alterarDescricaoDoPersonagemSelecionado(personagem) {
    const descricaopersonagem = document.getElementById('descricao-personagem')
    descricaopersonagem.innerText = personagem.getAttribute('data-description')
}

function alterarNomeDopersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem')
    nomePersonagem.innerText = personagem.getAttribute('data-name')
}

function aletrarImagemDePersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande')
    
    const idPersonagem = personagem.attributes.id.value
    
    imagemPersonagemGrande.src = `src/imagenss/card-${idPersonagem}.png`
}
function adicionarSelecaoDoPersonagem(personagem) {
    personagem.classList.add('selecionado')
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado')

    personagemSelecionado.classList.remove('selecionado')
}