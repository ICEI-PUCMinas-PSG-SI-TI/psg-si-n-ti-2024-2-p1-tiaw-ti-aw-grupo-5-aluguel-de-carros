var tipoUsuarioSelecionado = null;

const formProprietario = document.getElementById('form-proprietario');
const formMotorista = document.getElementById('form-motorista');
const selecaoUsuario = document.getElementById('selecao-usuario');
const formNavigation = document.getElementById('botoes');
const areaForm = document.getElementById("areaForm");

function MostrarFormulario(type) {
    tipoUsuarioSelecionado = type;

    // Ocultar a seção de seleção de usuário e mostrar o formulário correspondente
    selecaoUsuario.style.display = 'none';
    formNavigation.style.display = 'flex';

    // Aumentar área do formulário
    areaForm.classList.remove("w-50");
    areaForm.classList.add("w-75");

    // Exibir o formulário correto
    if (type === 'proprietario') {
        formProprietario.style.display = 'block';
    } else if (type === 'motorista') {
        formMotorista.style.display = 'block';
    }
}

function Voltar() {
    // Voltar para a seleção de usuário
    formProprietario.style.display = 'none';
    formMotorista.style.display = 'none';
    selecaoUsuario.style.display = 'block';

    
    // Aumentar área do formulário
    areaForm.classList.remove("w-75");
    areaForm.classList.add("w-50");
    tipoUsuarioSelecionado = null;
}

function Continuar() {
    if (!tipoUsuarioSelecionado) {
        alert("Por favor, selecione um tipo de usuário primeiro.");
        return;
    }
    
    const dados = capturarDadosFormulario(tipoUsuarioSelecionado);

    // Salvar dados no localStorage
    salvarNoLocalStorage(tipoUsuarioSelecionado, dados);

    alert(`Dados do ${tipoUsuarioSelecionado} salvos com sucesso!`);
    // ls = lerDados;
    // alert(ls);
    // Voltar();
}

function capturarDadosFormulario(tipoUsuario) {
    let dados = {};

    if (tipoUsuario === 'proprietario') {
        dados = {
            nome: document.getElementById('propNome').value,
            sobrenome: document.getElementById('propSobrenome').value,
            email: document.getElementById('propEmail').value,
            crlv: document.getElementById('propCRLV').value,
            dpvat: document.getElementById('propDPVAT').value,
            cpfCnpj: document.getElementById('propCPF').value,
            dataNascimento: document.getElementById('propDataNascimento').value
        };
    } else if (tipoUsuario === 'motorista') {
        dados = {
            nome: document.getElementById('propNome').value,
            sobrenome: document.getElementById('propSobrenome').value,
            email: document.getElementById('propEmail').value,
            cnh: document.getElementById('propCNH').value,
            validadeCnh: document.getElementById('propValidade').value,
            cpfCnpj: document.getElementById('propCPF').value,
            dataNascimento: document.getElementById('propDataNascimento').value
        };
    }

    return dados;
}

// Função para salvar os dados no localStorage
function salvarNoLocalStorage(tipoUsuario, dados) {
    const dadosJson = JSON.stringify(dados);
    localStorage.setItem(tipoUsuario, dadosJson);
}

function lerDados(){
    let strDados = localStorage.getItem(tipoUsuario);
    let objDados = {};

    if(strDados){
        objDados = JSON.parse(strDados);
    } else {
        if (tipoUsuario === 'proprietario') {
            objDados = {
                nome: '',
                sobrenome: '',
                email: '',
                crlv: '',
                dpvat: '',
                cpfCnpj: '',
                dataNascimento: ''
            };
        } else if (tipoUsuario === 'motorista') {
            objDados = {
                nome: '',
                sobrenome: '',
                email: '',
                cnh: '',
                validadeCnh: '',
                cpfCnpj: '',
                dataNascimento: ''
            };
        }
    }

    return objDados;
}
