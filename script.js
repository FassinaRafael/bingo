function criarTabela(nome) {
  // Esqueleto da tabela
  const tabela = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Agregando elementos
  tabela.appendChild(thead);
  tabela.appendChild(tbody);

  const section = document.querySelector(".cartela");
  section.appendChild(tabela);

  // Espaço para o nome do usuário
  const tr_nome = document.createElement("tr");
  const td_nome = document.createElement("td");
  td_nome.innerText = nome;
  td_nome.colSpan = 5;
  tr_nome.appendChild(td_nome);
  thead.appendChild(tr_nome);

  // Criando os elementos do cabeçalho (BINGO)
  const cabecalho = ["B", "I", "N", "G", "O"];

  const tr_header = document.createElement("tr");

  cabecalho.forEach((letra) => {
    const th = document.createElement("th");
    th.innerText = letra;
    tr_header.appendChild(th);
  });

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
