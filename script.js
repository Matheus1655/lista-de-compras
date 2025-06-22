window.onload = () => {
  const dadosSalvos = localStorage.getItem("lista");
  if (dadosSalvos) {
    document.getElementById("lista").innerHTML = dadosSalvos;
  }
};

function adicionarItem() {
  const input = document.getElementById("itemInput");
  const lista = document.getElementById("lista");
  const itemTexto = input.value.trim();

  if (itemTexto === "") return;

  const li = document.createElement("li");
  li.innerHTML = \`
    <span>\${itemTexto}</span>
    <div>
      <button onclick="marcarItem(this)">✅</button>
      <button onclick="removerItem(this)">🗑️</button>
    </div>
  \`;

  lista.appendChild(li);
  input.value = "";
  salvarLista();
}

function removerItem(botao) {
  botao.closest("li").remove();
  salvarLista();
}

function marcarItem(botao) {
  const li = botao.closest("li");
  li.classList.toggle("comprado");
  salvarLista();
}

function salvarLista() {
  const lista = document.getElementById("lista");
  localStorage.setItem("lista", lista.innerHTML);
}

function limparLista() {
  localStorage.removeItem("lista");
  document.getElementById("lista").innerHTML = "";
}
