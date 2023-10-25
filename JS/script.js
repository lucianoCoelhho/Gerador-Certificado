
function gerar() {
    const nome = document.getElementById('inputNome');

    inputNome = nome;



    contador = 1000000

    while (contador > 0) {

        contador = contador - 1

        certificadoHTML = emitirCertificado(inputNome.value)

    }



    listaLinks = [

        "https://codepen.io/laly_x/pen/JjdQZyR",

        "https://codepen.io/laly_x/pen/mdJZyqO",

        "https://codepen.io/laly_x/pen/GRJbJdB",

        "https://codepen.io/laly_x/pen/VwLJBrV",

        "https://codepen.io/laly_x/pen/LYpNbVy",

        "https://codepen.io/laly_x/pen/VwvaKxm",

        "https://codepen.io/laly_x/pen/JjYoaWy",

        "https://codepen.io/laly_x/pen/ZEGdodP",

        "https://codepen.io/laly_x/pen/GRpgpmO",

        "https://codepen.io/laly_x/pen/GRpjMmM",

        "https://codepen.io/laly_x/pen/jObEMME",

        "https://codepen.io/laly_x/pen/xxwGKZz",

        "https://codepen.io/laly_x/pen/dyYPQwW"

    ]



    listaTitulos = [

        "Lista de Exercícios",

        "Currículo",

        "Pokébola",

        "Bandeira do Japão",

        "Cálculo de Circunferência",

        "Aplicativo de IMC",

        "Aplicativo de Transporte",

        "Aplicativo de Gasolina",

        "Ficha Médica",

        "Aplicativo de Loteria",

        "Botão de Like do Facebook",

        "To-Do",

        "Gerador de Certificado"

    ]



    listaOrdenada = ""

    for (i = 0; i < listaLinks.length; i++) {

        link = listaLinks[i]

        titulo = listaTitulos[i]

        listaOrdenada = listaOrdenada +

            `<li>${titulo}: <br><a href = ${link} target="_blank">${link.replace("https://", "")}</a></li>`

    }



    document.body.innerHTML = `${certificadoHTML} 
  
      <ol> 
  
          ${listaOrdenada} 
  
      </ol>`

} 