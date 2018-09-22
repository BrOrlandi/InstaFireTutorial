# 8 - Comentando nas fotos

Referência: [Documentação Re-base](https://github.com/tylermcginnis/re-base#syncstateendpoint-options)

Este passo é bem semelhante ao passo anterior, a única diferença é a estrutura dos dados e como eles serão exibidos.
Também usaremos o `syncState` como no passo anterior.

Abra o arquivo `src/js/CommentList.js` e dê uma olhada no código. 
Veja que há um formulário para enviar os comentários. Você deverá editar o método `onSubmitComment` e o método `componentDidMount`.

No método `componentDidMount` sincronize com os comentários do banco de dados. Perceba que o caminho a ser sincronizado é diferente também.

No método `onSubmitComment` você precisa construir um novo objeto de comentário e adicioná-lo ao state do React, assim ele será sincronizado com o Firebase.

Nesse último passo não vou dar muitas dicas, você já deve conseguir implementar com base no que aprendeu neste tutorial até aqui.

**Parabéns se vocẽ chegou até e implementou todos os passos!**

**Espero que tenha gostado e aprendido com este tutorial!**

**Feedbacks são sempre bem-vindos, qualquer coisa me mande um e-mail: brorlandi@gmail.com**

**Lembre-se, este projeto é Open Source e você também pode contribuir com ele.**

Veja a solução completa deste tutorial implementada [aqui]()