const { createServer } = require("http");
const next = require("next");
const port = process.env.PORT || 21036;

// Configurar modo de desenvolvimento
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    try {
      handle(req, res);
    } catch (error) {
      console.error('Erro no servidor:', error);
      res.statusCode = 500;
      res.end('Erro interno do servidor');
    }
  }).listen(port, (err) => {
    if (err) {
      console.error('Erro ao iniciar o servidor:', err);
      process.exit(1);
    }
    console.log(`✅ Servidor rodando na porta ${port}`);
    console.log(`Modo de desenvolvimento: ${dev}`);
  });
}).catch((err) => {
  console.error('Erro ao preparar aplicação Next.js:', err);
  process.exit(1);
});

// Tratamento de encerramento graciosos
process.on('SIGTERM', () => {
  console.log('Recebendo sinal de encerramento. Finalizando servidor...');
  process.exit(0);
});