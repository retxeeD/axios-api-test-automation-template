#
# Js-api-test-automation-template

Este é um template de automação de testes de API utilizando Node Js para melhor manipulação de JSON.

## Tecnologias utilizadas
#
    Axios
    Chai
    Mocha
    Faker-js
    Mochawesome
    mocha-junit-reporter
    mocha-multi-reporters

## Axios
Utilizado para realização das requisições

## Chai
Utilizado para realização de acertions

## Mocha
Utilizado gerenciamento dos testes

## Faker-js
Utilizado para criação e dados fake

## mochawesome
Utilizado para geração de report html

## mocha-junit-reporter
Utilizado para geração de report xml

## mocha-multi-reporters
Utilizado para execução simultanea das duas libs de report
#
# Estruturação do projeto
    package.json - pacotes e informações do projeto
    multiReporterConfig.json - configurações da lib mocha-multi-reporters para execução de multi reporters
    .mocharc.yaml - configurações de execução dos testes
    src/hooks - configurações de logs do projeto
    src/model - modelos de requisição e response em JSON
    src/service - realização de requests e retornos de resposta
    src/tests - criação e organização do testes
    src/DataUtils.js - arquivo de configuração de variaveis de ambiente
#
# Modo de uso

Para iniciar sua automação utilizando este template siga os passos abaixo

    Faça o dowload de todas as dependencias nescessárias através desse comando
    > npm i --save-dev @faker-js/faker axios chai mocha mocha-junit-reporter mocha-multi-reporters mochawesome

> 1º Defina variaveis de ambiente do sue projeto no arquivo src/DataUtils.js
> 
> 2º Crie os cenários de testes dentro da pasta src/tests
> 
> 3º Crie os modulos de requisição dentro da pasta serc/service
> 
> 4º Defina o modelo de requisição que sera enviado na pasta src/model
> 
> 5º Execute os tetes por linha de comando no console utilizando "npm mocha"

    Para executar cenarios separadamente utiliza o comando "npm run byTag" alterando a tag deseja dentro do arquivo package.json