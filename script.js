function criarTabela(nome) {
    // Esqueleto da tabela
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Agregando elementos
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const body = document.querySelector("body");
    body.appendChild(tabela);

    // Criando os elementos do cabeçalho
    const th_nome = document.createElement("th");
    th_nome.innerText = nome;
    th_nome.colSpan = 5;
    thead.appendChild(th_nome);

    const th_B = document.createElement("th");
    th_B.innerText = "B";
    const th_I = document.createElement("th");
    th_I.innerText = "I";
    const th_N = document.createElement("th");
    th_N.innerText = "N";
    const th_G = document.createElement("th");
    th_G.innerText = "G";
    const th_O = document.createElement("th");
    th_O.innerText = "O";

    // Adicionando cabeçalhos à linha do cabeçalho
    const tr_header = document.createElement("tr");
    tr_header.appendChild(th_B);
    tr_header.appendChild(th_I);
    tr_header.appendChild(th_N);
    tr_header.appendChild(th_G);
    tr_header.appendChild(th_O);
    thead.appendChild(tr_header);

    // Criando um array para armazenar os números já gerados
    let numerosGerados = [];

    // Adicionando células com números aleatórios e "X" no centro
    for (let i = 0; i < 5; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            let td = document.createElement("td");
            if (i == 2 && j == 2) {
                td.innerText = "XX"; // Colocando "X" no centro
            } else {
                // Gerando números aleatórios não repetidos na mesma coluna
                let num;
                do {
                    num = numeros(j);
                } while (numerosGerados.includes(num));
                numerosGerados.push(num);
                td.innerText = num;
            }
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

function numeros(coluna) {
    const inicio = coluna * 15 + 1;
    const fim = inicio + 14;
    let aleatorio = Math.floor(Math.random() * (fim - inicio + 1) + inicio);
    return aleatorio;
}

function pedirNome() {
    const nome = prompt("Insira o nome que quer exibir na tabela");
    criarTabela(nome);
}
