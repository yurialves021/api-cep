
const cep = document.getElementById('cep')

cep.addEventListener('focusout', () => getCep(cep.value))



function preencheForms(viaCepJSON){

        const cidade = document.getElementById('cidade')
        const logradouro = document.getElementById('endereco')
        const estado = document.getElementById('estado')
        const bairro = document.getElementById('bairro')


        cidade.value = viaCepJSON.localidade
        logradouro.value = viaCepJSON.logradouro
        estado.value = viaCepJSON.uf
        bairro.value = viaCepJSON.bairro
}


