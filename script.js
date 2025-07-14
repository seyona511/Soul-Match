
window.onload = () => {
  setTimeout(() => {
    document.getElementById('splash').style.display = 'none';
    document.getElementById('logo-screen').style.display = 'flex';
  }, 3500);
  setTimeout(() => {
    document.getElementById('logo-screen').style.display = 'none';
    document.getElementById('auth-screen').style.display = 'block';
  }, 7000);
};

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(() => window.location.href = "painel.html")
    .catch(error => alert("Erro: " + error.message));
}

function signup() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then(() => alert("Cadastro realizado com sucesso!"))
    .catch(error => alert("Erro: " + error.message));
}
