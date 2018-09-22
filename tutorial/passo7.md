# 7 - Curtindo fotos

Referência: [Documentação Re-base](https://github.com/tylermcginnis/re-base#syncstateendpoint-options)

No passo 5 você usou o Re-base para carregar as fotos do feed. O método usado foi o `bindToState`, aqui vai ser bem semelhante. Porém usaremos o método `syncState`. A diferença deste método é que, além de carregar os dados do Firebase e sincronizá-los, ele também envia os novos dados automaticamente para o Firebase. Isto é basta atualizarmos o State do componente React e os dados serão atualizados no banco em tempo real.

Parece mágica né? Mas vamos ver funcionando.

Abra o arquivo `src/js/Likes.js` e dê uma olhada no código. Se vocẽ testar nas fotos, verá que o botão de like já funciona, porém ao atualizar a página, o like é perdido. Ou seja só falta sincronizar com o Firebase.

As curtidas são basicamente um array com ID dos usuários que curtiram a foto.
Então vocẽ deve especificar o ID do usuário nos métodos comentados neste arquivo.

Por fim, como no passo 5, reescreva o método `componentDidMount`.
O caminho a ser sincronizado dessa vez é variável e depende da foto.
Por isto este componente recebe como prop a `photoKey`.
Obtenha ela usando: 

```js
const { photoKey } = this.props;
```

No passo 5 especificamos o caminho para o re-base sincronizar as fotos e aqui o caminho será para os likes de uma foto. Ele pode ser escrito assim:

```js
const likesPath = `/photos/${photoKey}/likes`
```

Agora use o método `syncState` neste caminho. Vou dar uma dica de quais opções você deverá especificar: 
- defaultValue - valor default para este estado
- context - o componente que irá sincronizar
- state - o nome do atributo do estado do componente
- asArray - se é um array ou não

Caso tenha conseguido, os likes devem ficar salvo no banco de dados. Para testar isso, curta uma foto e atualize a página. A foto deve se manter com o seu Like.

Crie outro usuário usando o Login com Email e Senha, faça ele curtir várias fotos e acesse com outro usuário. Verifique se o contador de Likes vai subindo.

[Passo 8 - Comentando nas fotos ](./passo8.md)