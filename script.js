function adicionarItem() {
  const input = document.getElementById("itemInput");
  const lista = document.getElementById("lista");
  const itemTexto = input.value.trim();

  if (itemTexto === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="marcarItem(this)">${itemTexto}</span>
    <button onclick="removerItem(this)">🗑️</button>
  `;

  lista.appendChild(li);
  input.value = "";
}

function removerItem(botao) {
  botao.parentElement.remove();
}

function marcarItem(span) {
  span.parentElement.classList.toggle("comprado");
}
