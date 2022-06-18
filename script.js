const form = document.querySelector("form");
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let tituloCard = document.querySelector('#titulo');
    let tituloCriado = document.createElement('h2');
    tituloCriado.appendChild(document.createTextNode(tituloCard.value));

    let descricao = document.querySelector('#descricao');
    let descricaoCriada = document.createElement('p');
    descricaoCriada.appendChild(document.createTextNode(descricao.value));

    let imagemCard = document.querySelector('#card');
    let imagemCriada = document.createElement('img');
    let conteudoImagem = document.createElement('div');
    conteudoImagem.classList.add('urlImagem');
    imagemCriada.setAttribute('src', imagemCard.value);
    imagemCriada.setAttribute('style', "width:100%")
    conteudoImagem.appendChild(imagemCriada);

    let conteudo = document.createElement('div');
    conteudo.classList.add('content');
    conteudo.appendChild(tituloCriado);
    conteudo.appendChild(descricaoCriada);

    let item = document.createElement('div');
    item.classList.add('card_item');
    item.appendChild(conteudoImagem);
    item.appendChild(conteudo);

    item.addEventListener('click', () => {
        let parent = item.parentNode 
        parent.removeChild(item);
    });

    let lista = document.querySelector('.lista-cards');
    lista.style.display = 'block';
    lista.appendChild(item);

    form.reset();
});



