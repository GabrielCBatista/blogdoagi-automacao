# Testes Automatizados para o Blog do Agi

Este repositório contém testes automatizados para o Blog do Agi. O Blog é uma aplicação básica com poucas funcionalidades. Para lidar com esse tipo de aplicação, é preferível adotar uma abordagem simples e eficaz ao criar os casos de teste.

## Introdução

O objetivo deste conjunto de testes automatizados é garantir que as principais funcionalidades e páginas do Blog do Agi estejam funcionando conforme o esperado. Os testes são escritos em JavaScript usando o Cypress, um framework de teste de front-end.

### Tipos de Teste Implementados

Nesta automação, os seguintes tipos de teste foram implementados:

1. **Teste de Pesquisa**: Verifica a funcionalidade de pesquisa do blog, garantindo que ela retorne resultados esperados e que a página exiba corretamente os resultados.
   
2. **Teste de Rolagem e Paginação**: Testa a rolagem da página e a funcionalidade de paginação, garantindo que mais resultados sejam carregados corretamente ao rolar para baixo e ao clicar no botão de paginação.
   
3. **Teste de Exibição de Mensagem de Nenhum Resultado**: Verifica se a mensagem "Nenhum resultado" é exibida corretamente quando a pesquisa não retorna resultados.
   
4. **Teste de Acesso a Páginas Específicas**: Testa o acesso e a exibição de elementos em páginas específicas, como a página institucional, de produtos, de serviços, e outras.


## Configuração do Ambiente

Antes de executar os testes, certifique-se de ter o Node.js e o npm instalados em sua máquina. Em seguida, siga estas etapas:

1. Clone este repositório em sua máquina local:

git clone https://github.com/seu-usuario/blogdoagi-automacao.git

2. Navegue até o diretório do projeto:

cd blogdoagi-automacao

3. Instale as dependências do projeto:

npm install


## Estrutura do Projeto

A estrutura do projeto é a seguinte:

- **cypress**: Contém todos os arquivos relacionados aos testes Cypress.
  - **e2e**: Contém os arquivos de teste Cypress, como blogagi.cy.js.
- **fixtures**: Contém arquivos JSON usados para armazenar dados de teste, como fixtures.json.
- **support**: Contém arquivos de suporte, como comandos personalizados e configurações.
  - **commands.js**: Arquivo que contém comandos personalizados do Cypress.
  - **e2e.js**: Arquivo de suporte específico para os testes de end-to-end (e2e).
- **cypress.json**: Arquivo de configuração do Cypress.
- **README.md**: Este arquivo que você está lendo.


## Executando os Testes

Para executar os testes, execute o seguinte comando na raiz do projeto:

npx cypress run

Isso iniciará o Cypress em modo de linha de comando e executará todos os testes automaticamente. Os resultados dos testes serão exibidos no terminal.

Você também pode abrir a interface do Cypress para executar os testes interativamente. Para fazer isso, execute o seguinte comando:

npx cypress open

Isso abrirá a interface do Cypress, onde você pode selecionar os testes para executar e ver os resultados visualmente.

## Cenários de Teste

Os testes automatizados cobrem os seguintes cenários:

1. **Pesquisa pela palavra "investimento"**
   - Verifica se a pesquisa pela palavra "investimento" retorna os resultados esperados.
   - Verifica se a página exibe exatamente 10 resultados após a pesquisa.
   - Verifica se a área de resultados é visível na tela.

2. **Verificar a Exibição de 10 Resultados e o Botão "Posts mais antigos"**
   - Garante que a página exiba 20 resultados quando o botão "Posts mais antigos" é acionado.
   - Verifica se os resultados adicionais são carregados corretamente.
   - Verifica se a área de resultados é visível na tela.

3. **Pesquisa por "Nenhum resultado"**
   - Confirma se a pesquisa por um termo que não retorna resultados exibe a mensagem "Nenhum resultado".
   - Verifica se a interface reage conforme o esperado quando nenhum resultado é encontrado.

4. **Acesso à página de O Agibank**
   - Verifica se a página institucional carrega corretamente.
   - Confirma se todos os elementos esperados estão presentes e visíveis.

5. **Acesso à página de Produtos**
   - Garante que a página de produtos seja acessada sem problemas.
   - Verifica se os elementos relacionados aos produtos são exibidos conforme o esperado.

6. **Acesso à página de Serviços**
   - Confirma que a página de serviços é carregada com sucesso.
   - Verifica se os elementos relacionados aos serviços estão presentes e corretos.

7. **Acesso à página Suas Finanças**
   - Verifica se a página "Suas Finanças" é acessível.
   - Confirma se todos os elementos específicos dessa página estão presentes e visíveis.

8. **Acesso à página Suas Segurança**
   - Garante que a página "Suas Segurança" possa ser acessada.
   - Verifica se os elementos relativos à segurança estão presentes e corretos.

## Contribuição

Executar testes simples e eficazes em uma aplicação básica como o Blog do Agi é fundamental para garantir a qualidade e a estabilidade da homepage.

Se você tiver sugestões ou melhorias para os testes existentes, sinta-se à vontade para contribuir com o projeto!