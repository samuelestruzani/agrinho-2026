// Script básico para enviar formulário (simulação)
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada! Obrigado por entrar em contato.');
    form.reset();
});
