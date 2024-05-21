function criarTabela(nome)
{
    //Esqueleto da tabela
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    //Agregando elementos
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const body = document.querySelector("body");
    body.appendChild(tabela);

    //Criando os elementos
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

    tbody.appendChild(th_B);
    tbody.appendChild(th_I);
    tbody.appendChild(th_N);
    tbody.appendChild(th_G);
    tbody.appendChild(th_O);

    for (let i = 0; i < 5; i++)
    {
        const tr = document.createElement("tr")
        for (let j = 0; j < 5; j++)
        {
            let td = document.createElement("td")
            td.innerText = "XX";
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
}

function pedirNome()
{
    const nome = prompt("Insira o nome que quer exibir na tabela");
    criarTabela(nome);
}

function numeros()
{
    let coluna1 = 
}