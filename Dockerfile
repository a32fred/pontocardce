FROM node:21.7.3

# Define a pasta de trabalho
WORKDIR /app

# Copia os arquivos de dependências e instala as dependências
COPY package.json package-lock.json ./
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Mantém o container rodando com um terminal interativo
CMD ["/bin/sh"]
