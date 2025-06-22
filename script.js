// Carregar lista salva ao abrir
window.onload = () => {
  const dadosSalvos = localStorage.getItem("lista");
  if (dadosSalvos) {
    document.getElementById("lista").innerHTML = dadosSalvos;
  }
};

// Adiciona item novo
function adicionarItem() {
  const input = document.getElementById("itemInput");
  const lista = document.getElementById("lista");
  const itemTexto = input.value.trim();

  if (itemTexto === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${itemTexto}</span>
    <div>
      <button onclick="marcarItem(this)">✅</button>
      <button onclick="removerItem(this)">🗑️</button>
    </div>
  `;

  lista.appendChild(li);
  input.value = "";
  salvarLista();
}

function removerItem(botao) {
  botao.closest("li").remove();
  salvarLista();
}


function marcarItem(botao) {
  const li = botao.parentElement.parentElement;
  li.classList.toggle("comprado");
  salvarLista();
}


// Salva no navegador
function salvarLista() {
  const lista = document.getElementById("lista");
  localStorage.setItem("lista", lista.innerHTML);
}
