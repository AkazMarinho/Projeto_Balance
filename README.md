# Projeto Balance

## Sobre o projeto

O Balance é um projeto da Universidade Federal do Pará, Campus Castanhal, que tem como finalidade estudar, demonstrar e promover atividades físicas com o público externo da instituição, sendo majoritariamente composto por pessoas da Faculdade de Educação Física. O desenvolvimento de um sistema web surgiu com a necessidade de democratização dos dados gerados por esses estudos. Dessa forma, foi criado um aplicativo que conta os passos automaticamente e também está integrado com um acelerômetro para verificar a distância percorrida. Esses dados são enviados a um back-end, e minha função foi implementar um sistema web para exibir esses dados recolhidos. O sistema está disponível também para dispositivos móveis, com responsividade aplicada. A fim de lidar com uma grande quantidade de dados, o sistema oferece uma funcionalidade de busca, permitindo aos usuários encontrar rapidamente as informações desejadas.

## Tecnologia utilizadas

O projeto é desenvolvido em [React.js](https://react.dev/), sendo utilizados bibliotecas e funcionalidades dessa tecnologia como [React Router Dom](https://reactrouter.com/en/main) para interação entre páginas, [Axios](https://axios-http.com/) para ralizar as requisições Rest, [React icons](https://react-icons.github.io/react-icons/) para utilização de ícones. Para mostrar o grafico, foi implemetado a biblioteca externa [Apex Charts](https://apexcharts.com/).

## Telas do projeto

- Home
  
Mostra as pessoas cadastradas no sistema, com informações de nome, email e se praticam atividades físicas, sendo essa lista clicável para direcionar para os detalhes da pessoa.
<divalign="center">
  <img width="900px" src="https://github.com/AkazMarinho/Projeto_Balance/assets/58227029/a659f492-7ad0-4610-8a5c-e4d20a71215a"/>
</div>

A versão mobile conta apenas com nome e email

<div align="center">
  <img height="600px" src="https://github.com/AkazMarinho/Projeto_Balance/assets/58227029/cbb7843b-ea5b-49bc-a12f-958208be79b2"/>
</div>

- Dados individuais

Os dados informados são relativos ao que seçao recolhidos pelo aplicativo, como dados pessoais, dados de distância total, IMC e passos por dia, uma vez que os dados que são vistos são sempre dos últimos 7 dias.

<divalign="center">
  <img width="900px" src="https://github.com/AkazMarinho/Projeto_Balance/assets/58227029/e4d88f59-9772-42b4-9480-162c6a773699"/>
</div>


<div align="center">
  <img height="600px" src="https://github.com/AkazMarinho/Projeto_Balance/assets/58227029/131a4778-6fa4-4639-b8ff-f41a9ca2b325"/>
</div>

## Dependências necessárias e versão

As dependências necessárias para rodar o projetos estão apresentadas abaixo:

        "axios": "^1.6.5",
    "react": "^18.2.0",
    "react-apexcharts": "^1.4.1",
    "react-dom": "^18.2.0",
    "react-icons": "^5.0.1",
    "react-router-dom": "^6.21.2",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"

> Obs: caso o sistema apresente algum erro com as bibliotecas ao rodar a aplicação, entre em contato comigo através do email akazmarinho@gmail.com. 
 
## como rodar a aplicação

Copiar o link https do projeto disponível em `<>code`, crie uma pasta em um local do seu PC. Dentro da pasta criada, clique com o botão direito do mouse e abra o git bash, e clone o projeto para o seu repositório local com o seguinte comando:

> Obs: é necessário que tenha instalado previamente o git em seu dispositivo!

		git clone https://github.com/AkazMarinho/frequence-project.git
		
Dê dois cliques na pasta `Projeto_Balance`, clicar com um botão direito do mouse e clicar em `Abrir com code`.

> Obs: Os seguintes passos são referentes ao ambiente de desenvolvimento Visual Studio Code, caso esteja utilizando um ambiente de desenvolvimento diferente, verifique como utilizar, para abrir corretamente o projeto.

Com o atalho `Ctrl + j`, abra o terminal integrado do Visual Studio Code

> Obs: é necessário que tenha instalado previamente o Visual Studio Code em seu dispositivo!

No terminal, insira o seguinte comando para instalar as dependências necessárias:

	npm i react-icons react-router-dom axios apexcharts

Após isso, insira o comando de inicializar servidor React local:

	npm start
	
## Possíveis problemas 

Ao acessar o site pela primeira vez, pode haver um atraso de alguns minutos devido ao servidor da API. No entanto, após esse período inicial, as requisições devem ocorrer em uma velocidade normal.

## Próximos passos

O sistema está em fase inicial, então, espera-se uma grande evolução nas suas funcionalidades;
