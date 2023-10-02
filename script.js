const cidade = document.getElementById("cidade")
const cepUser = document.getElementById('cep')
const estado = document.getElementById('estado')
const bairro = document.getElementById('bairro')
const endereco = document.getElementById('endereco')
const complemento = document.getElementById('complemento')


const consulta_cep = async (cep) =>{
    const pegaCep = `https://viacep.com.br/ws/${cep}/json/`
      
    const res = await fetch(pegaCep);
    const data = await res.json();  
    
    return data;
}

const showCEP = async (cep) => {
    
    const data = await consulta_cep(cep);   

    cidade.innerHTML = data.localidade;
    estado.innerHTML = data.uf;
    bairro.innerHTML = data.bairro;
    endereco.innerHTML = data.logradouro;
    complemento.innerHTML = data.complemento;
    
}
function executaAPI(){
    const cep = cepUser.value

    showCEP(cep)
}