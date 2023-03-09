function verificarIdade(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var resposta = window.document.getElementById('resposta')
    var imagem = window.document.getElementById('imagem')
    var corpo = window.document.querySelector('body')
   

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ' )
    } else {
        var idade = ano - Number(fano.value)
        var genero = ''
        if (document.getElementById('masc').checked) {
            genero = 'Homem'
            corpo.style.backgroundColor = '#1aa6b7'
            
        } else if (document.getElementById('femi').checked) {
            genero = 'Mulher'
            corpo.style.backgroundColor = '#f5918f'
               
        }
        resposta.style.textAlign = 'center'

      // VERIFICAR SE É UM BEBÊ, SE ELE NASCEU EM 2023 A IDADE VAI FICAR COM VALOR 0 PORQUE O MÊS DE NASCIMENTO NÃO ESTÁ SENDO CALCULADO, LOGO ELE TEM MENOS DE 1 ANO MAS TEM MESES OU DIAS DE NASCIDO. 
        if (idade == 0){
            if(genero == 'Homem'){
                resposta.innerHTML = `Um menininho de poucos meses ou dias! `
                imagem.src = 'imagens/bebe_menino.png'
            } else if (genero == 'Mulher') {
                resposta.innerHTML = `Uma menininha de poucos meses ou dias! `
                imagem.src = 'imagens/bebe_menina.png'
            } 

            // VERIFICAR SE É UMA CRIANÇA COM IDADE ATÉ 12 ANOS
        } else if (idade > 0 && idade <= 12) { 
            if (genero == 'Homem') {
                genero = 'Menino'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = 'imagens/menino_crianca.png'

            } else if (genero == 'Mulher') {
                genero = 'Menina'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = 'imagens/menina_crianca.png'
            }
            
            // VERIFICAR SE É UM/UMA ADOLESCENTE COM IDADE ATÉ 18 ANOS
        } else if (idade > 12 && idade < 18 ) { 
            if (genero == 'Homem') {
                genero = 'Jovem Rapaz'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = 'imagens/jovem_rapaz.png'

            } else if (genero = 'Mulher') {
                genero = 'Jovem Moça'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = 'imagens/jovem_moca.png'

            }

            // VERIFICAR SE É UM ADULTO JOVEM COM IDADE ATÉ 30 ANOS
        } else if (idade > 17 && idade <= 30) { 
            if (genero == 'Homem') {
                genero = 'Homem jovem'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = 'imagens/homem_jovem.png'

            } else if (genero = 'Mulher') {
                genero = 'Mulher jovem'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = 'imagens/mulher_jovem.png'
            }
          
            // VERIFICAR SE É ADULTO COM IDADE MENOR QUE 50 ANOS
        } else if (idade > 30 && idade <= 50) { 
            if (genero == 'Homem') {
                genero = 'Homem'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = 'imagens/homem_30mais.png'

            } else if (genero = 'Mulher') {
                genero = 'Mulher'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = 'imagens/mulher_30mais.png'
            }
          
            // VERIFICAR SE É UM IDOSO COM IDADE ATÉ 120 ANOS
        } else if (idade > 50 && idade <= 120) { 
            if (genero == 'Homem') {
                genero = 'Homem Idoso'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = 'imagens/idoso_homem.png'

            } else if (genero = 'Mulher') {
                genero = 'Mulher Idosa'
                resposta.innerHTML = `${genero} de ${idade} anos!`
                imagem.src = 'imagens/idosa_mulher.png'
            }

          //VERIFICAR SE O IDOSO TEM MAIS DE 120 AS MORTE
        } else if (idade > 120) {
            if (genero == 'Homem') {
                genero = 'Homem'
                resposta.innerHTML = `${genero} de ${idade} anos! A ESSA ALTURA JÁ MORREU!`
                imagem.src = 'imagens/cruz_morte.png'

            } else if (genero = 'Mulher') {
                genero = 'Mulher'
                resposta.innerHTML = `${genero} de ${idade} anos! A ESSA IDADE JÁ MORREU!`
                imagem.src = 'imagens/cruz_morte.png'
            }   
        }
    }
}