var title = document.getElementById('pokename')

var parag = document.getElementById('pokeinfo')

var imagem = document.getElementById('image')

function pikafunc(){
    title.innerHTML = "#001 PIKACHU"
    title.style.color = 'yellow'

    imagem.src = 'images/pikachu-image.png'

    parag.innerHTML = "Além de simpático, o nome do Pikachu é uma combinação esperta de dois elementos que definem bem o monstrinho. Em japonês, 'Pika' é uma onomatopeia que simboliza eletricidade, enquanto 'chu' significa o barulho feito por ratos. Ou seja, o nome do Pikachu é, literalmente, rato elétrico."

}

function bulbafunc(){
    title.innerHTML = "<strong>#002 BULBASAUR</strong>"
    title.style.color = 'green'


    imagem.src = 'images/bulbasaur-image.png'

    parag.innerHTML = "Bulbasaur é um anfíbio quadrúpede, de coloração verde-água claro e com algumas manchas verde-água escuro. Contém um bulbo em suas costas, que tem um formato muito parecido com uma cebola."

}

function charmfunc(){
    title.innerHTML = "<strong>#003 CHARMANDER</strong>"
    title.style.color = 'orange'

    imagem.src = "images/charmander-image.png"

    parag.innerHTML = "Charmander é um pequeno bípede, dinossauro-como Pokémon. A maioria de seu corpo é de cor laranja, enquanto a sua barriga é uma cor amarelo claro. Charmander, juntamente com todas as suas formas evoluídos, tem uma chama que está constantemente a queima sobre a extremidade da cauda."

}


function squirfunc(){
    title.innerHTML = "#004 SQUIRTLE"
    title.style.color = 'lightskyblue'

    imagem.src = 'images/squirtle-image.png'

    parag.innerHTML = "Squirtle é um pequeno Pokémon, azul-claro com uma aparência semelhante ao de uma tartaruga. Como tartarugas, Squirtle tem um escudo que cobre seu corpo com orifícios que permitem que seus membros, cauda e cabeça para ser exposto. Ao contrário de uma tartaruga, Squirtle é normalmente bípede."

}