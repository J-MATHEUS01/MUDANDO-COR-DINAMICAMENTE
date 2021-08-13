//lógica do código um código rgb e jogar na variavel que armazena a tag selecionada com o atributo style


const buton = document.querySelector('.btn')
buton.addEventListener('click',  function(){
    let corDinamic01 = Math.floor(Math.random() * (255));

    let corDinamic02 = Math.floor(Math.random() * (255));

    let corDinamic03 = Math.floor(Math.random() * (255));

    const fundo = document.querySelector('#teste');
    fundo.style.backgroundColor = `rgb(${corDinamic01}, ${corDinamic02}, ${corDinamic03})`;


    corDinamic01 = Math.floor(Math.random() * (255));

    corDinamic02 = Math.floor(Math.random() * (255));

    corDinamic03 = Math.floor(Math.random() * (255));

    const logo = document.querySelector('#logo');
    logo.style.color = `rgb(${corDinamic01}, ${corDinamic02}, ${corDinamic03})`;


    corDinamic01 = Math.floor(Math.random() * (255));

    corDinamic02 = Math.floor(Math.random() * (255));

    corDinamic03 = Math.floor(Math.random() * (255));

    const menu1 = document.querySelector('#link1');
    menu1.style.color = `rgb(${corDinamic01}, ${corDinamic02}, ${corDinamic03})`;


    const menu2 = document.querySelector('#link2');
    menu2.style.color = `rgb(${corDinamic01}, ${corDinamic02}, ${corDinamic03})`;


    const menu3 = document.querySelector('#link3');
    menu3.style.color = `rgb(${corDinamic01}, ${corDinamic02}, ${corDinamic03})`;



    corDinamic01 = Math.floor(Math.random() * (255));

    corDinamic02 = Math.floor(Math.random() * (255));

    corDinamic03 = Math.floor(Math.random() * (255));

    const section1 = document.querySelector('#cont1');
    section1.style.backgroundColor = `rgb(${corDinamic01}, ${corDinamic02}, ${corDinamic03})`;
    const section2 = document.querySelector('#cont2');
    section2.style.backgroundColor = `rgb(${corDinamic01}, ${corDinamic02}, ${corDinamic03})`;
    const section3 = document.querySelector('#cont3');
    section3.style.backgroundColor = `rgb(${corDinamic01}, ${corDinamic02}, ${corDinamic03})`;

    corDinamic01 = Math.floor(Math.random() * (255));

    corDinamic02 = Math.floor(Math.random() * (255));

    corDinamic03 = Math.floor(Math.random() * (255));

    const rodoape = document.querySelector('#rodape')
    rodoape.style.backgroundColor = `rgb(${corDinamic01}, ${corDinamic02}, ${corDinamic03})`;

})