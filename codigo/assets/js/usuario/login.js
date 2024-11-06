document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const validEmail = "usuario@exemplo.com";
    const validPassword = "senha123";

    
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    
    const resultMessage = document.getElementById('resultMessage');
    if (email === validEmail && password === validPassword) {
        resultMessage.textContent = "Login realizado com sucesso!";
        resultMessage.className = "text-success";
    } else {
        resultMessage.textContent = "Usuário ou senha incorretos.";
        resultMessage.className = "text-danger";
    }
});