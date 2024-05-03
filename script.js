
function addTarefa() {
  let titulo = document.getElementById("txtTitulo").value;
  let descricao = document.getElementById("txtTarefa").value;
  
  let novaLinha = document.createElement("tr");
  
  let novoTitulo = document.createElement("td");
  novoTitulo.innerHTML = titulo;
  
  let novaDescricao = document.createElement('td')
  novaDescricao.innerHTML = descricao;
  
  let botaoExcluir = document.createElement('button');
  botaoExcluir.innerText = 'Excluir';
  botaoExcluir.setAttribute('type','button');
  botaoExcluir.setAttribute('onclick','excluirTarefa(this)');

  let celulaAcao = document.createElement('td');
  celulaAcao.appendChild(botaoExcluir);

  novaLinha.appendChild(novoTitulo);
  novaLinha.appendChild(novaDescricao);
  novaLinha.appendChild(celulaAcao);

  document.getElementById('tabela').appendChild(novaLinha);
}

function excluirTarefa(btn){
  let linha = btn.parentNode.parentNode;
  linha.parentNode.removeChild(linha);

}
