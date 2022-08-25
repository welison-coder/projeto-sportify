let musicas = [
    {
     titulo: 'musica aleatoria',
     artista: 'joão tinto',
     src:'musicas/Look Both Ways - Nathan Moore.mp3',
     img: 'imagens/belen-garrido-n642zkjBAEY-unsplash.jpg'
}
]
 
let musica = document.querySelector('audio')
let duracaoMusica = document.querySelector('.fim')
let imagem = document.querySelector('img')
let nomeMusica = document.querySelector('.descricao h2')
let nomeArtista = document.querySelector('.descricao i')
// eventos
document.querySelector('.botao-play').addEventListener('click',tocarMusica)

musica.addEventListener('timeupdate',atualizarBarra)

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration)) 


// funções
function tocarMusica(){
    musica.play()
    document.querySelector('.botao-pause').style.display = 'block'
    document.querySelector('.botao-play').style.display = 'none'
}

document.querySelector('.botao-pause').addEventListener('click',pusarMusica)

function pusarMusica(){
    musica.pause()
    document.querySelector('.botao-pause').style.display = 'none'
    document.querySelector('.botao-play').style.display = 'block'
}

function atualizarBarra(){
    let barra = document.querySelector('progress')
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%'
    let tempoDecorrido = document.querySelector('.inicio')
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime)) 
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60)
    let campoSegundos = segundos % 60
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos
    }
    return campoMinutos+':'+campoSegundos
}
