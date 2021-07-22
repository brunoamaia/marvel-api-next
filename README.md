# marvel-api-next

 Página criada pra o Pedido Pago Challenge (front-end).

 O desafio consiste em criar uma página que consome os dados da [Marvel API](https://developer.marvel.com/), utilizando as seguintes tecnologias:

 - [axios](https://github.com/axios/axios) - para consumo da API;
 - [nextjs](https://github.com/vercel/next.js) - Biblioteca usada para o desenvolvimento da aplicação;
 - [material-ui](https://material-ui.com/) - Utilizado para a estilização dos components.


Também utilizei as seguintes tecnologias:

- [typescript](https://www.typescriptlang.org/) - inserir tipagem em JavaScript;


Para iniciar a aplicação, é necessário instalar as bibliotecas e depois iniciar a execusão do projeto.

- Para instalar as bibliotecas, criar o arquivo com suas credenciais da [Marvel API](https://developer.marvel.com/) e posteriormente, executar o projeto.

Para que o projeto consiga ter acesso aos seus dados, é necessário cadastrar na [Marvel API](https://developer.marvel.com/) para ter suas chaves pública e privada. Com ambas, crie um arquivo com o nome <code>.env.local</code>
Dentro deste arquivo, insira suas chaves do seguinte modo:

```
NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY=
NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY=
```

- Após criar este arquivo, você pode instalar as bibliotecas, executanto:

<code>yarn</code> ou <code>npm install</code> ou <code>npm i</code>

- Para executar o projeto, utilize:

<code>yarn dev</code> ou <code>npm dev</code>

Para ver seu funcionamento, abra a página em:
http://localhost:3000/

O projeto está configurado para criar páginas estáticas durante o processo de "build".
