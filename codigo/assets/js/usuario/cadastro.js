const formProprietario = document.getElementById('form-proprietario');
const formMotorista = document.getElementById('form-motorista');
const selecaoUsuario = document.getElementById('selecao-usuario');
const formNavigation = document.getElementById('botoes');
const areaForm = document.getElementById("areaForm");

function MostrarFormulario(type) {
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
}

function Continuar() {
    alert('Formulário enviado!');
}