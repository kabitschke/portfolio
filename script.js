document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")

);

document.querySelector("#qtde").addEventListener("change", atualizaPreco)
document.querySelector("#js").addEventListener("change", atualizaPreco)
document.querySelector("#layout-sim").addEventListener("change", atualizaPreco)
document.querySelector("#layout-nao").addEventListener("change", atualizaPreco)

document.querySelector("#prazo").addEventListener("change", function (){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} Semanas`
    if(prazo == 1){
        document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} Semana`
    }
    atualizaPreco()
})

function atualizaPreco(){
    const qtde = document.querySelector("#qtde").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
   

    let preco = qtde * 100;
    if (temJS) preco *= 1.1
    if(incluiLayout) preco +=500
    let taxaUrgencia = 1 - prazo*0.1;
    //preco = preco + (preco*taxaUrgencia)
    preco *= 1 + taxaUrgencia
    
    document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`
}

function subirTela(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function BotaoScroll(){
    if(window.scrollY <= 200){        
        document.querySelector('.scrollbutton').style.display = 'none';
    }else{        
        document.querySelector('.scrollbutton').style.display = 'block';
    }
}

window.addEventListener('scroll', BotaoScroll);

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');//transforma em array
    elemento.innerHTML = '';//limpa o campo h1
    textoArray.forEach((letra, i)=> {
        setTimeout(()=> elemento.innerHTML += letra, 100 * i);//tempo multiplicado pelo indice de cada letra

    });
}

const titulo = document.querySelector("#titulo");
typeWriter(titulo);