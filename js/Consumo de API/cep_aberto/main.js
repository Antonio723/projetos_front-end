'use strict'

const preencherCampos = (endereco) => {
    document.getElementById("logradouro").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.cidade;
    document.getElementById("estado").value = endereco.estado;
}

const limparCampos = () => {
    document.getElementById("logradouro").value = null;
    document.getElementById("bairro").value = null;
    document.getElementById("cidade").value = null;
    document.getElementById("estado").value = null;
    
}

const validarCep = (cep) => {
    if (cep.length == 8 && /^[0-9]+$/.test(cep)) {
        return true;
    } else {
        return false;
    }
}

const pesquisar = async() => {
    const cep = document.getElementById("cep").value;


    if (validarCep(cep)) {
        limparCampos();
        const url = `https://api.postmon.com.br/v1/cep/${cep}`;
        try {
            const dados = await fetch(url);
            const endereco = await dados.json();
            preencherCampos(endereco);
            console.log(endereco);
        } catch {
            alert("Cep invalido")
        }
    } else {
        limparCampos();
        alert("CEP incorreto!");
    }
}

document.getElementById("cep").addEventListener("focusout", pesquisar);