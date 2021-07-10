# On11-TodasEmTech-s18-ProjetoFinal-Nayara


## Sobre a API

A **GIRLS WHO CODE!** é API desenvolvido para conectar mulheres desenvolvedoras em nível de conhecimento sênior, que estejam disponiveis a mentorar mulheres que estejam em transição de carreira para área de tecnologia ou estejam com dificuldades de crescimento profissional e recolocação.

"O futuro está sendo escrito em linhas de código. E o público feminino, apesar de usuário de apps, redes sociais e dispositivos digitais, não participa da produção da tecnologia. Precisamos falar sobre os desafios das mulheres na área e o que fazer para aumentar sua participação."

No API será cadastrado a desenvolvedora que deseja ser mentorada e as mentoras que desejem mentorar outras mulheres de forma gratuíta e social.

<br>
<br>

## Tecnologias usadas:

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript para backend|
| `express` | Framework NodeJS para construção de APIs rest |
| `dotenv` | Dependência para proteger dados sensíveis do projeto|
| `nodemon` | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente|
| `npm` | Gerenciador de pacotes|
|`Insomnia ` | Interface gráfica para realizar os testes|
| `MongoDb` | Banco de dado não relacional orientado a documentos|
| `mongoose` | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections|
| `MongoDb Compass` | Interface gráfica para verificar se os dados foram persistidos|
| `MongoDb Atlas`| Banco de dados como serviço - na nuvem |
|`Github` | Ferramenta de versionamento de código|
|`Heroku` |  plataforma nuvem que faz deploy de várias aplicações back-end |

<br>
<br>

### CRUD (rotas / endpoints)

//Create/Criar -> Post

POST criar o cadastro da desenvolvedora e da mentora

- [x] post("/", controller.criaDesenvolvedora) - Criará o cadastro da desenvolvedora.
- [x] post("/", controller.criaMentora) - Criará o cadastro da mentora.

//Read/Ler -> Get

- [x] get ("/", controller.listaDesenvolvedoras) - Deverá retornar todas as desenvolvedoras cadastradas.
- [x] get("/:id", controller.listaUmaDesenvolvedora) - - Deverá retornar uma desenvolvedora cadastrada.

- [x] get ("/", controller.listaMentoras) - Deverá retornar todas as mentoras cadastradas.
- [x] get("/:id", controller.listaUmaMentora) - - Deverá retornar uma mentora cadastrada.

//Update/atualizar -> Patch

- [x] put("/:id", controller.atualizaDesenvolvedora) - Deverá alterar informação específica dentro da desenvolvedora por id específico e retorna o cadastro alterado.
- [x] put("/:id", controller.atualizaMentora) - Deverá alterar informação específica dentro da mentpra por id específico e retorna o cadastro alterado.

//Delete/deletar -> Delete

- [x] delete("/:id", controller.deletaDesenvolvedora) -  Deverá deletar o cadastro da desenvolvedora por id específico e retorna mensagem de confirmação
- [x] delete("/:id", controller.deletaMentora) -  Deverá deletar o cadastro da mentora por id específico e retorna mensagem de confirmação

<br>
<br>

### Dados para Collection Mentora

- id: autogerada e obrigatória
- nome: texto e obrigatório
- cidade: texto e obrigatório 
- profissao: texto e obrigatório
- resumo_das_experiencias: texto e obrigatório
- linkedIn: nome de busca do LinkedIn
- email: obrigatório formato aceita caracteres específicos
- criadoEm: data gerada automaticamente e obrigatório

<br>
<br>

### Dados para Collection Desenvolvedora

- id: autogerada e obrigatória
- nome: texto e obrigatório
- cidade: texto e obrigatório 
- profissao: texto e obrigatório
- resumo_das_experiencias: texto e obrigatório
- linkedIn: nome de busca do LinkedIn
- email: obrigatório formato aceita caracteres específicos
- criadoEm: data gerada automaticamente e obrigatório

<br>
<br>

## 📁 Arquitetura 

```
 📁 Projeto Final Reprograma Mentoria Social
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📄 desenvolvedorasController.js
   |         |- 📄 mentorasController.js
   
   |    |- 📁 data
   |         |- 📄 dbConfig.js
   |
   |    |- 📁 models
   |         |- 📄 desenvolvedorasModels.js
   |         |- 📄 mentorasModels.js
   |
   |    |- 📁 routes
   |         |- 📄 desenvolvedorasRoutes.js
   |         |- 📄 index.js
   |         |- 📄 mentorasRoutes.js 
   |
   |    |- 📄 App.js
   |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 procfile
   |- 📄 readme
   |- 📄 server.js

```
<br>
<br>

## Acesse a apresentação do projeto:
https://www.canva.com/design/DAEjpMSdAXo/74cmEkfA-4b7mCSp-7VRrA/view?utm_content=DAEjpMSdAXo&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

## Nayara Brito Almeida Valevskii
- [linkedin](https://www.linkedin.com/in/nayaraba/)
- [github](https://github.com/NayaraWakewski)
```