const cep = document.getElementById("cep");

const cidade = document.getElementById("cidade");
const endereco = document.getElementById("endereco");
const estado = document.getElementById("estado");
const reqBairro = document.getElementById("bairro");

cep.addEventListener("focusout", () => getCep(cep.value));

// Definir como responsabilidade da função apenas preencher dados, não precisando, também, definir variaveis
function preencheForms({ localidade, logradouro, uf, bairro, ...rest }) {
        console.log(rest)
  cidade.value = localidade;
  endereco.value = logradouro;
  estado.value = uf;
  reqBairro.value = bairro;
}
