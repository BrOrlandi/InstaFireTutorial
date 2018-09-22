# 4 - Postando fotos

Referência da documentação: 
- [Storage upload de arquivos](https://firebase.google.com/docs/storage/web/upload-files)
- [Realtime Database escrita e leitura](https://firebase.google.com/docs/database/web/read-and-write)
- [Documentação Re-base](https://github.com/tylermcginnis/re-base)

Para este passo vamos trabalhar com dois módulos do Firebase, o **Realtime Database** e o **Storage**. O primeiro será para registrar todos os dados das fotos que serão exibidas no feed. Já o segundo é onde os arquivos das fotos serão enviados e armazenados.

*Dica: na pasta `photosSample` tem várias fotos top que você pode usar para testar seu upload de fotos.*

## 4.1 - Ativando os módulos no Firebase

Primeiro acesse o módulo **Storage** no painel do Firebase e clique no botão **Primeiros passos** para ativá-lo no projeto.

Depois acesse o módulo **Database** e veja a sessão **Realtime Database**.
Clique no botão **Criar banco de dados**, selecione o modo de teste para liberar as regras no banco.

Aproveite e já edite o arquivo `database.rules.json` e coloque `true` para leitura e escrita no banco.

*Para o desenvolvimento podemos deixar o banco com todas as permissões, mas para um projeto em produção você precisa se preocupar em detalhar estas regras senão deixará o banco vulnerável.*

## 4.2 - Upload da Foto para o Storage

Abra o arquivo `src/js/AddPhoto.js` nele contém toda a lógica para enviar a foto. Nele você só vai precisar mexer no método `onSubmitPhoto`.
Para enviar a foto vamos precisar do id do usuário que está postando, para identificarmos quem postou.

- Obtenha o usuário na linha 51.

Nesta parte serão necessárias 3 Promises, por isso tente usar `async/await` para melhor legibilidade do código.

A primeira Promise será enviar a foto ao Storage do Firebase. O arquivo da foto está na variável `photoFile` e o caminho que a foto será armazenada está na variável `pathToPhoto`.

- Envie a foto para o Storage. Dica: pesquise o método `.put()` do Storage.

Depois você precisa obter a URL da foto para podermos exibir ela na aplicação. Para isso use o método `getDownloadURL`, esta é a segunda promise.

## 4.3 - Configurar o Re-base

Antes de enviarmos fotos para o Realtime Database precisamos configurar o Re-base que é a lib que facilita a integração entre o React, nosso framework para desenvolver a aplicação Web, e o Firebase, nosso serviço para armazenar e integrar os dados da aplicação.

Vá no arquivo `src/js/firebase.js`.
Importe o Re-base, configure-o com o Firebase e exporte-o.
O código adicionado deve ser:

```js
import Rebase from 're-base';

//...

const database = firebase.database();

export const rebase = Rebase.createClass(database);
```

## 4.4 - Postando a foto no Feed realtime

Agora você precisa criar o post da foto no Realtime database do Firebase.
Crie um objeto que contenha todas as informações necessárias para o post. Já vou deixar a estrutura dele aqui:

```js
const newPhotoData = {
  userId: user.uid, // id do usuário
  userName: user.displayName, // nome do usuário 
  userPicture: user.photoURL, // foto de perfil do usuário
  imageSrc: photoUrl, // url da foto enviada para o Storage
  timestamp: firebase.database.ServerValue.TIMESTAMP, // indica para usar o timestamp do servidor
  description, // descrição que o usuário digitou para a foto
  likes: {}, // a foto não possui likes ainda
  comments: {}, // a foto não possui comentários ainda
};
```

Agora você pode enviar este objeto para o realtime database. Para isso importe o `rebase` que configuramos no passo anterior.

Envie para o caminho `/photos` no Realtime, pois de lá que iremos carregar as fotos do feed. Para finalmente postar a foto para o `Firebase` usando re-base segue a linha de código:

```js
await rebase.push('/photos', { data: newPhotoData })
```

## 4.5 - Verifique se a foto foi postada

Acesse no painel do Firebase os módulos de Storage e Database, verifique que os dados estão lá e estão corretos.

Se estiver tudo certo, próximo passo vamos carregar as fotos!

[Passo 5 - Carregando feed de fotos](./passo5.md)

