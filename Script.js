async function buscarCEP() {
    const cep = document.getElementById("cep").value;

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const dados = await resposta.json();

    document.getElementById("cidade").innerText = dados.localidade;
    document.getElementById("estado").innerText = dados.uf;
}
