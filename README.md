# Projeto Bolão Copa do Mundo

### **Link da documentação** do Postman
#### **[Projeto Bolão]()**

## Sobre o projeto
Criação de API para um bolão da Copa do Mundo 2022.

#### **Desenvolvimento do Projeto**

**O projeto foi desenvolvido em TYPESCRIPT, no NODE.JS com o auxílio das bibliotecas, EXPRESS, CORS, KNEX, DOTENV, UUID, JSONWEBTOKEN, HASHMANAGER e com o banco de dados MYSQL.**

## Copa do Mundo 2022
Vamos nos divertir e fazer um bolão com a família ou com os amigos?

O projeto vai criar automaticamente os jogos da primeira fase da Copa do Mundo, o que você precisa fazer?

Criar seu usuário e o seu grupo e dar os seus palpites.

**API**
**Criar um usuário (User)** ✔️

- Ele deve ter um id único.
- Nome deve ter no mínimo 3 caracteres
- Nickname deve ter no mínimo 3 caracteres
- Email com checks de REGEX e cadastro único no Banco de dados.
- Password com segurança e token de verificação.
- Role deverá ser criado usuários com status (NORMAL, PREMIUM ou ADMIN)
- O usuário ADMIN, deverá ser capaz de deletar um usuário e ou um grupo.

**Criar grupos (Groups)**  ✔️ (todos os campos são obrigatórios), ex:

- Id único.
- O nome do grupo deverá ser único, no mínimo 3 caracteres. (groupsname)
- Descrição, descrição do grupo, no mínimo 3 caracteres.

**Migrations para a tabela de jogos (Matches)**. ✔️

**Criar os palpites** ✔️

- ID único.
- User_id referenciado da tabela de usuários.
- Group_id referenciado da tabela de grupos.
- Bets: 

​		**Exemplo:**

​		O jogo 1 - Qatar x Equador, o usuário tem que cadastrar 2 resultados, o score do Qatar e do Equador.

​		Vamos dizer que o resultado final foi **Qatar 2 x Equador 0**

​		- Resultado certo: **15 pontos**

​		- Acertou somente o **VENCEDOR** Qatar 2 x Equador 1: **10 pontos**

​		- Acertou somente o **PERDEDOR** Qatar 3 x Equador 0: **8 pontos**

​		- Acertou o resultado, mas não o **VENCEDOR** ou o **PERDEDOR** Qatar 4 x Equador 1: **5 pontos**, vale para **EMPATES** resultado final 0 x 0 e a aposta foi 1 x 1.

​		- Errou o resultado, mas acertou o **VENCEDOR** ou o **PERDEDOR** Qatar 2 x Equador 3: **3 pontos**



#### **Detalhes:**

1 - A API não deve aceitar cadastros de resultados se a data do jogo já tiver passado. ✔️

2 - A API pode retornar o resultado parcial, de cada bolão. ✔️

3 - Um usuário pode participar de quantos bolões ele quiser. ✔️

4 - Criado um README.MD para facilitar a compreensão da API. ✔️

5 - Criar a documentação via POSTMAN.

6 - Criar um endpoint de DELETE para o ADMIN, para remover usuários ou grupos, que existirem mensagens ofensivas, políticas, discursos de ódio e/ou preconceitos.



### **Quer rodar a aplicação?**
#### **Faça um clone no seu terminal**
**[Projeto Bolão]()**

#### **Você precisará instalar algumas bibliotecas.**
**Em seu terminal, instale:**

- npm i express @types/express
- npm i cors @types/cors
- npm i knex mysql @types/knex
- npm i dotenv
- npm i uuid @types/uuid
- npm i jsonwebtoken @types/jsonwebtoken
- npm i bcryptjs @types/bcryptjs

**Crie um arquivo .env com as configurações do seu banco de dados** (preferencialmente MySQL, caso deseje utilizar outro, adaptações no código e dependências serão necessárias).

##### Informações do Banco de Dados

DB_HOST = seu_endereço_host

DB_USER = seu_usuário

DB_PASSWORD = sua_senha

DB_DATABASE = seu_banco_de_dados

##### Informações para o HashManager

BCRYPT_SALT_ROUNDS = 12

##### Informações para o Authenticator

JWT_KEY = suasenhadesegurançaprimária

JWT_EXPIRES_IN = 1hr

**Execute a aplicação**
npm start

## TABELAS MYSQL
#Esta tabela será usada para criar um usuário
CREATE TABLE Projeto_Bolao_Users(
	id VARCHAR(255) NOT NULL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	nickname VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
    role ENUM('NORMAL' , 'PREMIUM' , 'ADMIN') DEFAULT ('NORMAL') 
);

### Esta tabela será para criar os bolões de amigos.        
CREATE TABLE Projeto_Bolao_Groups (
	id VARCHAR(255) NOT NULL PRIMARY KEY,
	groupsname VARCHAR(255) NOT NULL,
	description VARCHAR(255) NOT NULL,
	user_id VARCHAR(255),
		FOREIGN KEY (user_id) REFERENCES Projeto_Bolao_Users(id)
);

### Esta tabela será usada para criar os 48 jogos da primeira fase.

CREATE TABLE Projeto_Bolao_Matches (
	id VARCHAR(255) NOT NULL PRIMARY KEY,
	country1 VARCHAR(255) NOT NULL,
    country2 VARCHAR(255) NOT NULL,
    scorecountry1 INT(2),
    scorecountry2 INT(2),
    dateOfGame DATE NOT NULL,
    matchgame ENUM('A' , 'B' , 'C', 'D' , 'E' , 'F', 'G', 'H') NOT NULL 
);
#Esta tabela será onde os usuários darão os seus palpites.
CREATE TABLE Projeto_Bolao_Bets (
	id VARCHAR(255) NOT NULL PRIMARY KEY,
	user_id VARCHAR(255),
		FOREIGN KEY (user_id) REFERENCES Projeto_Bolao_Users(id),
	group_id VARCHAR(255),
		FOREIGN KEY (group_id) REFERENCES Projeto_Bolao_Groups(id),
    betgame1_01 INT(2),
    betgame1_02 INT(2),
    betgame2_01 INT(2),
    betgame2_02 INT(2),
    betgame3_01 INT(2), 
    betgame3_02 INT(2),
    betgame4_01 INT(2),
    betgame4_02 INT(2),
    betgame5_01 INT(2),
    betgame5_02 INT(2),
    betgame6_01 INT(2),
    betgame6_02 INT(2),
    betgame7_01 INT(2),
    betgame7_02 INT(2),
    betgame8_01 INT(2),
    betgame8_02 INT(2),
    betgame9_01 INT(2),
    betgame9_02 INT(2),
    betgame10_01 INT(2),
    betgame10_02 INT(2),
    betgame11_01 INT(2),
    betgame11_02 INT(2),
    betgame12_01 INT(2),
    betgame12_02 INT(2),
    betgame13_01 INT(2),
    betgame13_02 INT(2),
    betgame14_01 INT(2),
    betgame14_02 INT(2),
    betgame15_01 INT(2),
    betgame15_02 INT(2),
    betgame16_01 INT(2),
    betgame16_02 INT(2),
    betgame17_01 INT(2),
    betgame17_02 INT(2),
    betgame18_01 INT(2),
    betgame18_02 INT(2),
    betgame19_01 INT(2),
    betgame19_02 INT(2),
    betgame20_01 INT(2),
    betgame20_02 INT(2),
    betgame21_01 INT(2),
    betgame21_02 INT(2),
    betgame22_01 INT(2),
    betgame22_02 INT(2),
    betgame23_01 INT(2),
    betgame23_02 INT(2),
    betgame24_01 INT(2),
    betgame24_02 INT(2),
    betgame25_01 INT(2),
    betgame25_02 INT(2),
    betgame26_01 INT(2),
    betgame26_02 INT(2),
    betgame27_01 INT(2),
    betgame27_02 INT(2),
    betgame28_01 INT(2),
    betgame28_02 INT(2),
    betgame29_01 INT(2),
    betgame29_02 INT(2),
    betgame30_01 INT(2),
    betgame30_02 INT(2),
    betgame31_01 INT(2),
    betgame31_02 INT(2),
    betgame32_01 INT(2),
    betgame32_02 INT(2),
    betgame33_01 INT(2),
    betgame33_02 INT(2),
    betgame34_01 INT(2),
    betgame34_02 INT(2),
    betgame35_01 INT(2),
    betgame35_02 INT(2),
    betgame36_01 INT(2),
    betgame36_02 INT(2),
    betgame37_01 INT(2),
    betgame37_02 INT(2),
    betgame38_01 INT(2),
    betgame38_02 INT(2),
    betgame39_01 INT(2),
    betgame39_02 INT(2),
    betgame40_01 INT(2),
    betgame40_02 INT(2),
    betgame41_01 INT(2),
    betgame41_02 INT(2),
    betgame42_01 INT(2),
    betgame42_02 INT(2),
    betgame43_01 INT(2),
    betgame43_02 INT(2),
    betgame44_01 INT(2),
    betgame44_02 INT(2),
    betgame45_01 INT(2),
    betgame45_02 INT(2),
    betgame46_01 INT(2),
    betgame46_02 INT(2),
    betgame47_01 INT(2),
    betgame47_02 INT(2),
    betgame48_01 INT(2),
    betgame48_02 INT(2)
);

### 

### **AUTOR**

#### **[Leonardo Simas](https://github.com/leonardosimas)**
