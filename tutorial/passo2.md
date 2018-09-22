# 2 - Conectando o projeto Firebase

Referência da documentação: [https://firebase.google.com/docs/web/setup](https://firebase.google.com/docs/web/setup)

Ao finalizar a criação do projeto você entrará no Console. Haverá 3 botões para começar a criar sua aplicação. Neste caso vamos para o terceiro botão para obtermos o código para Web.

Crie o arquivo `src/js/firebase.js`. Ele será usado para centralizar as configurações do Firebase. Copie seu código de configurações para o arquivo. Ele deve ficar algo como:
```js
// Initialize Firebase
const config = {
  ...
};

firebase.initializeApp(config);
```

# 2.1 - Configurando o projeto Firebase

Verifique se possui o CLI do Firebase tentando rodar apenas `firebase` no seu terminal. Caso não possua pode instalar com:

```
$ npm install --global firebase-tools
```

Agora faça login com sua conta no CLI:

```
$ firebase login
```

Inicialize o projeto Firebase com:

```
$ firebase init
```

A primeira pergunta para inicializar o projeto é saber quais são as funcionalidades que seu projeto vai usar, selecione as opções: 

- **Database** : onde serão armazenados os dados da aplicação (fotos, comentários, likes).
- **Hosting** : hospedagem do site estático para termos o projeto rodando online.
- **Storage** : armzenamento de arquivos, onde será feito o upload das fotos que forem enviadas.

Feito isso, selecione o seu projeto que foi criado no console do Firebase.
Deixe as outras perguntas com as respostas padrão, apenas aperte Enter até finalizar.

Você verá que foram criado arquivos de regras de acesso ao banco de dados (`database.rules.json`), regras de acesso ao armazenamento de arquivos (`storage.rules`), configurações do projeto (`.firebaserc` e `firebase.json`).

# 2.2 - Importando Firebase no JavaScript

Agora você precisa import a dependência do Firebase para usar as funcionalidades dele no seu projeto. Ele já está instalado no projeto como você pode ver no `package.json`.

No arquivo `src/js/firebase.js` você deve importar o firebase e suas funcionalidades que irá usar, seguindo o código abaixo:

```js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
```

Ao final do arquivo exporte o módulo do firebase para usar no resto do projeto:

```js
export default firebase;
```

No próximo passo vamos começar a implementar as funcionalidades do projeto começando pela autenticação de usuários.

[Passo 3 - Autenticação de Usuários](./passo3.md)

