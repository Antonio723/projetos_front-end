'use strict'

const limparCampo = () => {
    document.getElementById('logradouro').value = null;
    document.getElementById('bairro').value = null;
    document.getElementById('cidade').value = null;
    document.getElementById('estado').value = null;
    
}


const inserirdados = (endereco) => {
    if (endereco.erro){
        alert("Erro CEP invalido");
    } else{
        document.getElementById('logradouro').value = endereco.logradouro;
        document.getElementById('bairro').value = endereco.bairro;
        document.getElementById('cidade').value = endereco.localidade;
        document.getElementById('estado').value = endereco.uf;
    }
}

const validarCep = (cep) => {
    if (cep.length == 8 && /^[0-9]+$/.test(cep)) {
        return true;
    } else {
        return false;
    }
}

const pesquisarCep = async () => {
    limparCampo();
    const cep = document.getElementById("cep").value;
    if (validarCep(cep)) {
        const url = `http://viacep.com.br/ws/${cep}/json/`;
        const dados = await fetch(url);
        const endereco = await dados.json();
        inserirdados(endereco);
        console.log(endereco);
    }
}
/*
const pesquisarCep = async() => {
    const cep = document.getElementById("cep").value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(respond=>console.log(respond.json()));
}
*/
document.getElementById("cep").addEventListener('focusout', pesquisarCep);

