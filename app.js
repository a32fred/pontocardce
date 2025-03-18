const { createServer } = require("http"); // Servidor HTTP
const next = require("next");

// Configuração da porta
const port = process.env.PORT || 3000; // Permite definir a porta via variável de ambiente
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

// Inicia o servidor HTTP com tratamento de erros
app
  .prepare()
  .then(() => {
    const server = createServer((req, res) => {
      try {
        handle(req, res);
      } catch (error) {
        console.error("Erro ao lidar com a requisição:", error.message);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Erro interno no servidor.");
      }
    });

    server.listen(port, () => {
      console.log(`✅ Servidor rodando em http://localhost:${port}`);
    });

    server.on("error", (error) => {
      console.error("Erro no servidor:", error.message);
      process.exit(1);
    });

    process.on("uncaughtException", (error) => {
      console.error("Erro inesperado:", error.message);
      process.exit(1);
    });

    process.on("unhandledRejection", (reason, promise) => {
      console.error("Rejeição não tratada em Promise:", reason);
      process.exit(1);
    });
  })
  .catch((error) => {
    console.error("Erro ao preparar o Next.js:", error.message);
    process.exit(1);
  });
