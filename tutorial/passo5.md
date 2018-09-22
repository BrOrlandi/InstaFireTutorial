# 5 - Carregando feed de fotos

Se você chegou até aqui **Parabéns!** O upload da foto era a parte mais difícil. Ufa!

Agora vamos ver as fotos que postamos, tenha pelo menos duas fotos enviadas no seu banco de dados para serem exibidas no feed.

## 5.1 - Sincronizando o feed em tempo real

Para isto vamos ao arquivo que implementa o feed de fotos: `src/js/FeedPage.js`

Nele só iremos reescrever o método `componentDidMount` que é um método do React. Lembre-se que este médoto é chamado assim que o componente é renderizado na primeira vez. Veja que o componente `FeedPage` possui um estado com um array de fotos.

O que precisamos fazer é carregar esse array com as fotos do Realtime database e mantê-lo sincronizado. Para isso vamos importar o Re-base e usar o método `bindToState` para conectar o componente React ao banco de dados no Firebase.

Segue o código e a explicação de cada linha deste método.

```js
componentDidMount() {
  rebase.bindToState('/photos', { // se conecta ao endereço '/photos' do Realtime database
    context: this, // o contexto é o próprio componente, portanto 'this'
    asArray: true, // queremos um array de fotos, lembrando que os dados não ficam em arrays no Firebase, o re-base faz essa conversão pra nós.
    state: 'photos', // aqui especifica em qual atributo do 'state' deste componente será armazenado os dados
    queries: {
      orderByChild: 'timestamp', // vamos ordenar pela ordem de postagem da foto
      limitToLast: 50, // vamos sempre exibir apenas as últimas 50 fotos postadas
    },
  });
}
```

## 5.2 - Aprecie as fotos

Se tudo deu certo você já deve ver suas fotos postadas nos feed!

Siga o próximo passo para fazer deploy da aplicação no Firebase Hosting!

[Passo 6 - Deploy no Firebase](./passo6.md)

