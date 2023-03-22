//elementos
const novoAFazer = document.getElementById('novoAFazer')
const novoItem = document.getElementById('novoItem')
const limpar = document.getElementById('limpar')
const listagem = document.getElementById('listagem')

//inserir na listagem o novo a fazer
function inserirAFazres() {
	const novoItem = novoAFazer.value

	if (novoItem.trim() !== '') { // Verifica se o valor de novoItem não está vazio
		//crio os elementos a serem adicionados na tabela
		const novoAfazerTr = document.createElement('tr')
		const novoAfazerTd = document.createElement('td')
		const botaoExcluir = document.createElement('button')
		//obtendo e colocando o valor a string com innerText
		novoAfazerTd.innerText = novoItem
		botaoExcluir.innerText = 'Excluir'
		//coloco um evento nesse botão, que ao clicar será acionado a função removerAFazer
		botaoExcluir.addEventListener('click', removerAFazer);
		//adicionando no corpo do html os filhos
		novoAfazerTr.appendChild(novoAfazerTd)
		novoAfazerTr.appendChild(botaoExcluir)
		listagem.appendChild(novoAfazerTr)
	} else {
		window.alert('Deve ser informado um valor para ser armazenado!')
	}
	//limpar input
	novoAFazer.value=''
}

//equanto tiver filhos para serem removidos eles serão
function removerAFazeres() {
	while (listagem.firstChild) { 
		listagem.removeChild(listagem.firstChild);
	  }
}
//capturo o pai da tabela e removo a linha
function removerAFazer() {
	const linha = this.parentNode
	linha.remove()
}
