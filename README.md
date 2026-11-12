# 🚀 Registro de consumo de energia

Backend Node.js + Express gerado automaticamente a partir do script SQL para **MYSQL**.

## 🛠️ Como rodar o projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure o banco de dados:**
   Certifique-se de que o **MYSQL** está rodando e execute o seu script SQL para criar as tabelas.
   Confira as credenciais no arquivo `.env`.

3. **Inicie o servidor:**
   ```bash
   # Modo Produção
   npm start

   # Modo Desenvolvimento (Com auto-reload)
   npm run dev
   ```

## 📌 Endpoints da API

### Tabela `usuario`
- `GET /api/usuario` - Listar todos
- `GET /api/usuario/:id` - Obter por ID
- `POST /api/usuario` - Criar novo
- `PUT /api/usuario/:id` - Atualizar por ID
- `DELETE /api/usuario/:id` - Deletar por ID

### Tabela `consumo`
- `GET /api/consumo` - Listar todos
- `GET /api/consumo/:id` - Obter por ID
- `POST /api/consumo` - Criar novo
- `PUT /api/consumo/:id` - Atualizar por ID
- `DELETE /api/consumo/:id` - Deletar por ID

"# sesi_pbe1_node_mariadb_consumo_2026" 
