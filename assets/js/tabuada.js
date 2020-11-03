
//Declaração de uma função
function calculaTabuada(){


    //Obtendo do DOM o tbody da tabela   
    let tabuada = document.querySelector("#tabuada tbody");
    //Obtendo o valor A do campo input number e convertendo em int
    let valorA = parseInt(document.querySelector("#valorA").value);
    //Limando o conteúdo do tbody
    tabuada.innerHTML = '';
    // criando um laço de repetição de 0 a 10
    for (let valorB = 0; valorB <= 10; valorB++) {

        // calculando o resultado da linha atual
        let resultado = valorA * valorB;

        //Criando o template das colunas da linha atual
        let template = `
                <td>${valorA}</td>
                <td>X</td>
                <td>${valorB}</td>
                <td>=</td>
                <td>${resultado}</td>
            `;

            //Criando o elemento tr
            let tr = document.createElement('tr');
            //Criando as colunas na linha
            tr.innerHTML = template;
            //Inserindo a linha na tabela
            tabuada.append(tr);


    }//Fechando o for

}//Fechando a função

//Chamando a função pela primeira vez
calculaTabuada();

//Adicionando o evento de alteração ao campo número
document.querySelector("#valorA").addEventListener('change', calculaTabuada);