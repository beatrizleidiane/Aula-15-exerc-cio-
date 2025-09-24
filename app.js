// ===================
// Tema e acessibilidade
// ===================
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('bg-dark');
    document.body.classList.toggle('text-white');
}

function increaseFont() {
    document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) + 2) + 'px';
}

function decreaseFont() {
    document.body.style.fontSize = (parseFloat(getComputedStyle(document.body).fontSize) - 2) + 'px';
}

// ===================
// Produtos (INDEX)
// ===================
const tabela = document.getElementById("produtos-tabela");

if (tabela) {
    const produtos = [
        {
            nome: "Site Profissional",
            especificacao: "Até 10 páginas, SEO básico, integração com Google Analytics",
            mensal: 40,
            anual: 400
        },
        {
            nome: "Loja Virtual",
            especificacao: "100 produtos, integração de pagamento, eCommerce padrão",
            mensal: 60,
            anual: 600
        },
        {
            nome: "Aplicativo Mobile",
            especificacao: "Android e iOS, notificações push, painel administrativo",
            mensal: 80,
            anual: 800
        },
        {
            nome: "Marketing Digital",
            especificacao: "Campanhas no Google Ads e Facebook, relatórios mensais",
            mensal: 50,
            anual: 500
        }
    ];

    function renderTabela(produtos) {
        tabela.innerHTML = "";
        produtos.forEach((produto, index) => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${produto.nome}</td>
                <td>${produto.especificacao}</td>
                <td>
                    <div class="btn-group" role="group">
                        <button type="button" class="btn btn-outline-primary btn-sm" onclick="selecionarPagamento(${index}, 'mensal')">R$ ${produto.mensal}/mês</button>
                        <button type="button" class="btn btn-outline-success btn-sm" onclick="selecionarPagamento(${index}, 'anual')">R$ ${produto.anual}/ano</button>
                    </div>
                </td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="selecionarProduto(${index})">Selecionar</button>
                </td>
            `;
            tabela.appendChild(tr);
        });
    }

    function selecionarProduto(index) {
        alert(`Você selecionou o produto: ${produtos[index].nome}`);
    }

    function selecionarPagamento(index, tipo) {
        alert(`Produto: ${produtos[index].nome}\nPagamento: ${tipo === 'mensal' ? 'R$ ' + produtos[index].mensal + '/mês' : 'R$ ' + produtos[index].anual + '/ano'}`);
    }

    document.getElementById("busca").addEventListener("input", (e) => {
        const busca = e.target.value.toLowerCase();
        const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(busca));
        renderTabela(filtrados);
    });

    renderTabela(produtos);
}

// ===================
// Solicitações (SOLICITACAO.HTML)
// ===================
document.addEventListener("DOMContentLoaded", function () {
    const formSolicitacao = document.getElementById("formSolicitacao");
    const tabelaSolicitacoes = document.getElementById("tabelaSolicitacoes");

    if (formSolicitacao && tabelaSolicitacoes) {
        let solicitacoes = [
            {
                nome: "Maria Oliveira",
                servico: "Integração com CRM",
                descricao: "Solicita integração com Salesforce para sincronizar leads."
            },
            {
                nome: "Pedro Santos",
                servico: "Customização de Dashboard",
                descricao: "Quer relatórios personalizados para área de marketing."
            }
        ];

        function renderSolicitacoes() {
            const tbody = tabelaSolicitacoes.querySelector("tbody");
            tbody.innerHTML = "";
            solicitacoes.forEach((s) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${s.nome}</td>
                    <td>${s.servico}</td>
                    <td>${s.descricao}</td>
                `;
                tbody.appendChild(tr);
            });
            console.log("Solicitações renderizadas:", solicitacoes); // DEBUG
        }

        // Renderiza a lista inicial
        renderSolicitacoes();

        formSolicitacao.addEventListener("submit", function (e) {
            e.preventDefault();
            const nome = document.getElementById("nomeCliente").value;
            const servico = document.getElementById("servico").value;
            const descricao = document.getElementById("descricao").value;

            // Adiciona nova solicitação
            solicitacoes.push({ nome, servico, descricao });
            renderSolicitacoes();
            console.log("Nova solicitação adicionada:", { nome, servico, descricao }); // DEBUG
            alert("Solicitação enviada com sucesso!");
            document.getElementById("tdNomeCliente").innerText = nome;
            document.getElementById("tdServico").innerText = servico;
            document.getElementById("tdDescricao").innerText = descricao;

            //quero que apareça os dados inseridos na tela após clicar em enviar
            //document.getElementById("tdNomeCliente").innerText = nome;
            //document.getElementById("tdServico").innerText = servico;
            //document.getElementById("tdDescricao").innerText = descricao;

            

            // Limpa o formulário
            formSolicitacao.reset();
        });
    }
});
