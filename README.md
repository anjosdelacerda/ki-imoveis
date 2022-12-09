KImóveis - TypeORM com Relacionamentos

API de uma imobiliária aonde os administradores podem cadastrar imóveis, endereços e categorias para dentro do banco e usuários podem se cadastrar e agendar visitas nos imóveis disponíveis na API.

**Tecnologias utilizadas:**

Node.js | Express.js | Yarn | Yup | JWT | DOTENV | Express-async-errors | Reflect-metadata | TypeORM | PostgreSQL | Bcryptjs | PG | UUID

Para clonar o repositório use este comando no seu terminal:

````
git clone git@github.com:anjosdelacerda/ki-imoveis.git

````
use o comando abaixo para instalar todas as dependências necessárias
````
yarn install
````


**Atenção:** é necessário utilizar o `yarn` pois esse projeto foi iniciado com esse gerenciador de pacotes.

Para verificar se já possui o gerenciador yarn instalado utilize o seguinte comando:

````
yarn --version
````

Caso não possua o yarn instalado, utilize o comando abaixo para instalar globalmente na sua máquina:

````
npm install --global yarn
````
<br>

# Como alternar entre docker e localhost

Essa entrega já está com o Docker configurado e pronto para uso

Basta buildar e subir nossos containers usando o comando padrão:
````
docker-compose up --build
````

ou
````
docker compose up --build
````
O comando pode variar com a versão do docker compose instalada em sua máquina

***ATENÇÃO:*** a porta utilizada para rodar nosso docker é a `5431`.
Caso tenha algum problema com essa porta, basta alterá-la no docker-compose.yml.

<br>

## **Mas caso você necessite executar a entrega em `localhost`**
**Configure as variáveis de ambiente no seu .env**, passando as credenciais corretas para conectar em seu banco local

E altere a variável **`DB_HOST`** para **`localhost`**

Com isso feito, para rodar sua aplicação, basta utilizar o comando
````
yarn dev
````

<br>

# **Sobre os testes**

Essa aplicação possui testes, que serão utilizados para validar, se todas as regras de negócio foram aplicadas de maneira correta.

Os testes estão localizados em `src/__tests__`.

Na subpasta `integration` estão os testes.

Já na subpasta `mocks` estão os dados que serão utilizados para os testes.

No arquivo `jest.config.json` estão algumas configurações necessárias para os testes rodarem.

**`De modo algum altere qualquer um desses arquivos.`** Isso poderá comprometer a integridade dos testes.

E também não altere o script de `test` localizado no `package.json`. Isso será utilizado para rodar os testes.

<br>


# **Rodando os testes** 

Para rodar os testes é necessário que no seu terminal, você esteja dentro do diretório do projeto.

Estando no terminal e dentro do caminho correto, você poderá utilizar os comandos a seguir:

### Rodar todos os testes
````
yarn test
````
#
### Rodar todos os testes e ter um log ainda mais completo
````
yarn test --all
````
#

### Rodar os testes de uma pasta específica
`detalhe: repare que tests está envolvido por 2 underlines. Isso se chama dunder.`
````
yarn test ./scr/__tests__/integration/<subpasta>
````
#
### Rodar os testes de um arquivo específico
````
yarn test ./scr/__tests__/integration/<subpasta>/<arquivo>
````
#
### Rodar um teste específico
````
yarn test -t <describe ou test específico envolto em aspas>
````
````
\\ ex: yarn test -t "/categories"
\\ rodaria os testes do describe "/categorias" no caminho
\\ ./scr/__tests__/integration/categories/categoriesRoutes.test.ts
````




**Caso você queira verificar todas as opções de execução de testes, visite a [Documentação oficial do Jest](https://jestjs.io/docs/cli)**

Após rodar um dos comandos aparecerá um log no seu terminal, contendo as informações da execução do teste.

**Observação:** O teste pode demorar alguns segundos para ser finalizado. Quanto maior for o teste, mais tempo será consumido para a execução.




**Atenção:** É necessário criar uma arquivo chamado .env dentro da pasta do projeto e colocar as suas credenciais nela, use o arquivo .env.example como
parâmetro. Para isso você terá que ter o **PostgreSQL** instalado em sua máquina, caso tenha dúvidas você poderá consultar a documentação <a href="https://www.postgresql.org/docs/current/tutorial-start.html">aqui</a>.

Dentro da aplicação terá o arquivo workspace.json aonde você poderá importa-lo em seu testador de rotas favorito.
