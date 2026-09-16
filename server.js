/**
 * IMPACTA+ Cuiabá - Express 5 & MongoDB Atlas Backend Server
 * 
 * Este servidor backend fornece a API RESTful e suporte Node.js + Express 5 + MongoDB Atlas,
 * permitindo integração de banco de dados NoSQL e exportação CSV server-side.
 */

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração EJS para renderização server-side (quando aplicável)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos do build
app.use(express.static(path.join(__dirname, 'dist')));

// Dados em memória/mock (ou conecte via mongoose.connect(process.env.MONGODB_URI))
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

// API REST Endpoint: Listar comércios
app.get('/api/comercios', (req, res) => {
  res.json({ success: true, total: comerciosCuiaba.length, data: comerciosCuiaba });
});

// API REST Endpoint: Cadastrar comércio
app.post('/api/comercios', (req, res) => {
  const novoComercio = {
    id: `cuiaba-api-${Date.now()}`,
    ...req.body,
    city: 'Cuiabá - MT',
    verified: true,
  };
  comerciosCuiaba.unshift(novoComercio);
  res.status(201).json({ success: true, message: 'Comércio cadastrado com sucesso!', data: novoComercio });
});

// API REST Endpoint: Login de Usuário / Comprador / Vendedor
app.post('/api/login', (req, res) => {
  const { email, role } = req.body;
  res.json({
    success: true,
    user: {
      email,
      role: role || 'merchant',
      name: role === 'merchant' ? 'Comércio Cuiabano' : 'Grande Empresa Compradora',
    }
  });
});

// API REST Endpoint: Exportar CSV Server-side
app.get('/api/export-csv', (req, res) => {
  const headers = ['ID', 'Nome', 'Bairro', 'Cidade', 'Categoria', 'Produto', 'Telefone', 'Email'];
  const rows = comerciosCuiaba.map(c => [c.id, c.name, c.neighborhood, c.city, c.category, c.product, c.phone, c.email]);
  
  const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\n');
  
  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="comercios_cuiaba.csv"');
  res.status(200).send(csvContent);
});

// SPA Fallback Route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`[IMPACTA+] Servidor Express 5 operando na porta ${PORT}`);
  });
}

export default app;
