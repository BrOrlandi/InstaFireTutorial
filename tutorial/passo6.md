# 6 - Deploy no Firebase

A aplicação já tem uma funcionalidade básica funcionando. Já podemos fazer o primeiro deploy dela. 

Abra o arquivo `package.json`. Veja que há um script chamado `deploy`.
Ele faz duas coisas:

Primeiro, faz o build da aplicação para a pasta `public`. Como é uma aplicação que usa React, Babel e etc, este passo é importante para gerar o código final da aplicação que rodará no browser em produção.

Segundo passo, executa `firebase deploy` que irá subir para o Firebase todo o seu projeto sendo:
- as regras de acesso ao banco Realtime
- as regras de acesso ao Storage
- e por fim, seus arquivos buildados na pasta `public`

Se tudo der certo, no final o script irá retornar a URL da sua aplicação online no Firebase.

Acesse com o seu celular e tente postar umas fotos por lá!

Ainda temos mais que aprender com este projeto e a partir daqui você pode escolher qual a próxima funcionalidade que quer implementar no projeto.

[Passo 7 - Curtindo fotos ](./passo7.md)
[Passo 8 - Comentando nas fotos ](./passo8.md)