const { createServer } = require("https"); // Alterado para HTTPS
const next = require("next");
const fs = require("fs");
const path = require("path");

// Função para carregar certificados (ajuste o caminho conforme sua pasta)
const loadSSLOptions = () => {
  const certPath = path.join(__dirname, "certificado", "pontocardce.com.br.pem");
  const pemContent = fs.readFileSync(certPath, "utf8");
  
  return {
    key: pemContent,
    cert: pemContent
  };
};

// Configurações
const port = 21036; // Mantida fixa conforme a KingHost
const sslOptions = loadSSLOptions();
const app = next({ dev: false });
const handle = app.getRequestHandler();

// Inicia o servidor HTTPS
app.prepare().then(() => {
  createServer(sslOptions, (req, res) => { // Adicionadas opções SSL
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`Servidor HTTPS rodando na porta ${port}`);
  });
});
