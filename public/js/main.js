// Função para fazer login com Google
const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // O usuário foi autenticado com sucesso
        const user = result.user;
        console.log("Usuário autenticado:", user);
        
        // Você pode acessar os detalhes do usuário, como:
        console.log("Nome:", user.displayName);
        console.log("Email:", user.email);
        console.log("Foto de perfil:", user.photoURL);
        
        // Aqui você pode redirecionar o usuário ou armazenar dados no banco
        window.location.href = "/dashboard"; // Exemplo de redirecionamento após o login
      })
      .catch((error) => {
        // Em caso de erro
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
  
        console.error("Erro ao tentar logar com Google:", errorCode, errorMessage);
      });
  };
  
  // Chamar a função de login
  document.getElementById('login-btn').addEventListener('click', signInWithGoogle);
  