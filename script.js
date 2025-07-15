
function login() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            window.location.href = 'feed.html'; // Redireciona para o feed
        })
        .catch((error) => {
            alert('Erro ao entrar: ' + error.message);
        });
}
