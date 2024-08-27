# Use uma imagem base do Node.js
FROM node:16

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos de pacotes (package.json e package-lock.json)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o código do projeto para o contêiner
COPY . .

# Exponha a porta na qual o aplicativo irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "dev"]
