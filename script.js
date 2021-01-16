const opcaoMenu = document.querySelectorAll('.opcaoCardapio');
const modal = document.querySelector('#modal');
console.log(opcaoMenu);
for(let opcaoW of opcaoMenu){
  opcaoW.addEventListener("click", function(){
    const imagem = opcaoW.querySelector('.imgCardapio').src;
    const titulo = opcaoW.querySelector('.tituloCardipio').innerHTML;
    const chef = opcaoW.querySelector('.chefCardapio').innerHTML;
    modal.querySelector('#imagemDoPrato').src = imagem;
    modal.querySelector('#tituloDoPrato').innerHTML = titulo;
    modal.querySelector('#nomeDoChef').innerHTML = chef;
    modal.classList.add('ativado');
    
  })
}

modal.querySelector('#botao').addEventListener('click', function(){
 modal.classList.remove('ativado');
})
