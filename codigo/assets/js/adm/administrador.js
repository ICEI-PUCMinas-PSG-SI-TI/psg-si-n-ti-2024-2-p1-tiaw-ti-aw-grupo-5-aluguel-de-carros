const accounts = {
  denunciadas: [
    { name: "João Silva", type: "Proprietário", img: "" },
    { name: "Maria Souza", type: "Motorista", img: "" },
    { name: "Marcela Ferraz", type: "Motorista", img: "" },
    { name: "Antônio Santos", type: "Proprietário", img: "" },
    { name: "Juliana Albuquerque", type: "Proprietário", img: "" },
  ],
  banidas: [
    { name: "Carlos Almeida", type: "Motorista", img: "https://via.placeholder.com/40" },
    { name: "Ana Costa", type: "Proprietário", img: "" },
    { name: "Fernanda Queiroz", type: "Proprietário", img: "" },
  ],
  recuperacao: [
    { name: "Pedro Santos", type: "Motorista", img: "" },
    { name: "Paula Oliveira", type: "Proprietário", img: "" },
    { name: "Roberto Gontijo", type: "Motorista", img: "" },
    { name: "José Alves", type: "Motorista", img: "" },
  ],
};

let currentFilter = "todos";
let currentSearch = "";

// Render lists
function renderList(category, filter = "todos", search = "") {
  const list = document.getElementById(`${category}-list`);
  list.innerHTML = "";

  accounts[category]
    .filter((account) => {
      const matchesFilter = filter === "todos" || account.type === filter;
      const matchesSearch = account.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .forEach((account) => {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item d-flex justify-content-between align-items-center";

      listItem.innerHTML = `
        <div class="d-flex align-items-center">
          ${
            account.img
              ? `<img src="${account.img}" class="account-img" alt="Imagem de perfil">`
              : `<div class="account-icon"><i class="bi bi-person-circle"></i></div>`
          }
          <div>
            <strong>${account.name}</strong><br>
            <small>${account.type}</small>
          </div>
        </div>
        <button class="btn btn-primary btn-sm">Revisar</button>
      `;

      list.appendChild(listItem);
    });
}

// Inicializa as listas
["denunciadas", "banidas", "recuperacao"].forEach((category) => renderList(category));

// Gerenciar os filtros de tipo
document.querySelectorAll("[data-type]").forEach((btn) =>
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".nav-pills .nav-link").forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
    currentFilter = e.target.dataset.type;
    ["denunciadas", "banidas", "recuperacao"].forEach((category) => renderList(category, currentFilter, currentSearch));
  })
);

// Gerenciar a barra de pesquisa
document.getElementById("searchBar").addEventListener("input", (e) => {
  currentSearch = e.target.value;
  ["denunciadas", "banidas", "recuperacao"].forEach((category) => renderList(category, currentFilter, currentSearch));
});


// ---------------------------------------------------------------------------------

const API_BASE_URL = "https://26e366f9-7376-449d-ad2a-34369b53b2cd.mock.pstmn.io";

// Função para buscar as contas
async function fetchAccounts(category) {
  try {
    const response = await fetch(`${API_BASE_URL}/accounts?category=${category}`);
    const data = await response.json();
    return data; // Retorna os dados recebidos
  } catch (error) {
    console.error("Erro ao buscar contas:", error);
  }
}

// Função para criar uma conta
async function createAccount(account) {
  try {
    const response = await fetch(`${API_BASE_URL}/accounts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(account),
    });
    const data = await response.json();
    console.log("Conta criada:", data);
  } catch (error) {
    console.error("Erro ao criar conta:", error);
  }
}

// Função para atualizar uma conta
async function updateAccount(id, updates) {
  try {
    const response = await fetch(`${API_BASE_URL}/accounts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    const data = await response.json();
    console.log("Conta atualizada:", data);
  } catch (error) {
    console.error("Erro ao atualizar conta:", error);
  }
}

// Função para deletar uma conta
async function deleteAccount(id) {
  try {
    await fetch(`${API_BASE_URL}/accounts/${id}`, { method: "DELETE" });
    console.log("Conta excluída:", id);
  } catch (error) {
    console.error("Erro ao excluir conta:", error);
  }
}

// Exemplo de uso:
fetchAccounts("denunciadas").then((accounts) => console.log(accounts));
createAccount({ name: "Novo Usuário", type: "Motorista", img: "" });
