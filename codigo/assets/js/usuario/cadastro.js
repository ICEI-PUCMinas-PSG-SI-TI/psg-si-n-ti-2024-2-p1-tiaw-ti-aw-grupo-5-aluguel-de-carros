const formProprietario = document.getElementById('form-proprietario');
const formMotorista = document.getElementById('form-motorista');
const selecaoUsuario = document.getElementById('selecao-usuario');
var formNavigation = document.getElementById('botoes');

function MostrarFormulario(type) {
    // Ocultar a seção de seleção de usuário e mostrar o formulário correspondente
    selecaoUsuario.style.display = 'none';
    formNavigation.style.display = 'flex';

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
}

function Continuar() {
    alert('Formulário enviado!');
}