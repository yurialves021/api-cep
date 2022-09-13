async function getCep(cep) {

    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ''

    try {

        const viaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        const viaCepJSON = await viaCep.json()

        if (viaCepJSON.erro) {
            throw Error('CEP não existe!')
        } 

        preencheForms(viaCepJSON)

        return viaCepJSON
    } catch (erro) {
        mensagemErro.innerHTML = `<p> CEP inválido. Tente novamente! </p>`
    }

}

