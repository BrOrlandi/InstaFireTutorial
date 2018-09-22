# 3 - Autenticação de Usuários

Referência da documentação: [https://firebase.google.com/docs/auth/web/start](https://firebase.google.com/docs/auth/web/start)

Primeiro você precisa ativar o módulo de autenticação do seu projeto lá no painel do Firebase.
Acesse no painel **Authentication** e em seguida a aba **Método de login**.
Ative dois provedores de login **Email/senha** e **Google**.

## 3.1 - Adicionando autenticação no projeto

Ufa! Vamos começar a programar esse projeto logo!

O projeto começa pelo arquivo `src/js/index.js` é nele que a aplicação React é iniciada. Veja que temos uma função para tratar a alteração de estado da autenticação. A função `handleAuthStateChanged` deve ser chamada pelo Firebase quando o usuário se autenticar ou fizer logout na aplicação.

Para isso você deve usar a função `onAuthStateChanged` do módulo `auth` do Firebase. Consulte a documentação para mais detalhes.

Ao configurar a chamada corretamente a aplicação deve exibir a tela de login pois nenhum usuário está autenticado. Para formulário de login vamos usar uma Lib do próprio Firebase que já dá o formulário pronto pra gente!

Edite o arquivo `src/js/LoginPage.js` e descomente as linhas necessárias para exibir o formulário.

## 3.2 - Exibir nome e foto do Usuário

O Login deve estar funcionando agora. Veja o nome do usuário logado no console do browser.

Agora vamos exibir o nome e foto do usuário na barra de navegação.  
Edite o arquivo `src/js/NavBar.js` para obter o nome e a foto do usuário logado. Já tem um código para te ajudar.


## 3.3 - Logout

O botão de **Sair** ainda não está funcionando. No mesmo arquivo da barra de navegação é fácil fazer o logout do usuário. Basta usar a função `signOut()` do módulo `auth`.

Agora Login e Logout devem estar funcionando! Siga para o próximo passo!

[Passo 4 - Postando fotos](./passo4.md)

