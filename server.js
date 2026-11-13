/**
 * IMPACTA+ Cuiabá - Servidor Express 5
 *
 * API REST simples (dados em memória) + serve o build do Vite (pasta dist).
 * Os dados NÃO persistem entre reinicializações. Para persistência real,
 * conecte um banco (ex.: MongoDB Atlas via mongoose) no lugar do array abaixo.
 *
 * Desenvolvimento: `npm run dev:all` (Vite na 3000 + API na 3001, com proxy de /api)
 * Produção local:  `npm run serve`
 */

import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos do build
app.use(express.static(DIST_DIR));

let comerciosCuiaba = [
  {
    id: 'cuiaba-1',
    name: 'Padaria Bom Preço',
    neighborhood: 'CPA',
    city: 'Cuiabá - MT',
    category: 'Alimentação',
    product: 'Pães artesanais, salgados em atacado e panificação corporativa',
    phone: '(65) 99234-5678',
    email: 'contato@padariabompreco.com.br',
    verified: true,
  },
  {
    id: 'cuiaba-2',
    name: 'Hortifruti Cuiabano',
    neighborhood: 'Coxipó',
    city: 'Cuiabá - MT',
    category: 'Alimentação',
    product: 'Frutas, verduras e hortaliças orgânicas direto do produtor',
    phone: '(65) 99876-5432',
    email: 'vendas@hortifruticuiabano.com.br',
    verified: true,
  },
  {
    id: 'cuiaba-3',
    name: 'Confecções Pantanal',
    neighborhood: 'Centro Político Administrativo',
    city: 'Cuiabá - MT',
    category: 'Vestuário',
    product: 'Uniformes profissionais, EPIs têxteis e confecção sob medida',
    phone: '(65) 99345-6789',
    email: 'comercial@confeccoespantanal.com.br',
    verified: true,
  },
  {
    id: 'cuiaba-4',
    name: 'Grafitec Soluções',
    neighborhood: 'Jardim Itália',
    city: 'Cuiabá - MT',
    category: 'Serviços',
    product: 'Gráfica rápida, rótulos de embalagens e comunicação visual',
    phone: '(65) 99123-4567',
    email: 'atendimento@grafitecuiaba.com.br',
    verified: true,
  },
  {
    id: 'cuiaba-5',
    name: 'Marmitaria Dona Maria',
    neighborhood: 'Parque Cuiabá',
    city: 'Cuiabá - MT',
    category: 'Alimentação',
    product: 'Refeições corporativas e marmitas industriais',
    phone: '(65) 99654-3210',
    email: 'donamaria@marmitariacuiaba.com.br',
    verified: true,
  },
  {
    id: 'cuiaba-6',
    name: 'Marcenaria Verde Cuiabá',
    neighborhood: 'Distrito Industrial',
    city: 'Cuiabá - MT',
    category: 'Construção',
    product: 'Paletes sustentáveis, móveis corporativos sob medida',
    phone: '(65) 99789-0123',
    email: 'marcenaria@verdecuiaba.com.br',
    verified: true,
  },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const str = (v, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

// Listar comércios
app.get('/api/comercios', (req, res) => {
  res.json({ success: true, total: comerciosCuiaba.length, data: comerciosCuiaba });
});

// Cadastrar comércio (campos validados; sem espalhar req.body direto)
app.post('/api/comercios', (req, res) => {
  const body = req.body || {};
  const novoComercio = {
    id: `cuiaba-api-${Date.now()}`,
    name: str(body.name),
    neighborhood: str(body.neighborhood),
    city: 'Cuiabá - MT',
    category: str(body.category, 60),
    product: str(body.product, 500),
    phone: str(body.phone, 30),
    email: str(body.email, 120),
    // Novos cadastros só ficam verificados após revisão
    verified: false,
  };

  const erros = [];
  if (!novoComercio.name) erros.push('Nome é obrigatório.');
  if (!novoComercio.product) erros.push('Produto/serviço é obrigatório.');
  if (!EMAIL_RE.test(novoComercio.email)) erros.push('E-mail inválido.');
  if (erros.length) {
    return res.status(400).json({ success: false, errors: erros });
  }

  comerciosCuiaba.unshift(novoComercio);
  res.status(201).json({ success: true, message: 'Comércio cadastrado com sucesso!', data: novoComercio });
});

// Login de demonstração (sem autenticação real)
app.post('/api/login', (req, res) => {
  const email = str(req.body?.email, 120);
  const role = req.body?.role === 'buyer' ? 'buyer' : 'merchant';
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ success: false, message: 'E-mail inválido.' });
  }
  res.json({
    success: true,
    user: {
      email,
      role,
      name: role === 'merchant' ? 'Comércio Cuiabano' : 'Grande Empresa Compradora',
    },
  });
});

// Escapa campo CSV (separador ';') e neutraliza injeção de fórmula em planilhas
const csvCell = (value) => {
  let s = String(value ?? '');
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return `"${s.replace(/"/g, '""')}"`;
};

// Exportar CSV
app.get('/api/export-csv', (req, res) => {
  const headers = ['ID', 'Nome', 'Bairro', 'Cidade', 'Categoria', 'Produto', 'Telefone', 'Email'];
  const rows = comerciosCuiaba.map((c) => [
    c.id, c.name, c.neighborhood, c.city, c.category, c.product, c.phone, c.email,
  ]);

  const csvContent =
    '\uFEFF' + [headers, ...rows].map((r) => r.map(csvCell).join(';')).join('\r\n');

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="comercios_cuiaba.csv"');
  res.status(200).send(csvContent);
});

// API inexistente -> 404 JSON (evita devolver o index.html para /api/...)
app.use('/api', (req, res) => {
  res.status(404).json({ success: false, message: 'Rota não encontrada.' });
});

// Fallback da SPA (Express 5: wildcard precisa ser nomeado)
app.get('/{*splat}', (req, res) => {
  const indexFile = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexFile)) {
    return res
      .status(404)
      .send('Build não encontrado. Rode "npm run build" antes de iniciar o servidor.');
  }
  res.sendFile(indexFile);
});

// Na Vercel o app é exportado como função serverless (api/index.js), sem listen
if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`[IMPACTA+] Servidor Express 5 operando na porta ${PORT}`);
  });
}

export default app;
