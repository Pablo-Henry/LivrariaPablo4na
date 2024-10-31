import pool from '../config/database';

const createTables = async () => {
    const client = await pool.connect();
    try {
      const queryText = `
        CREATE TABLE IF NOT EXISTS client_on_the_table (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          cpf CHAR(11) NOT NULL,
          email VARCHAR(100) NOT NULL
        );
`;
              await client.query(queryText);
              console.log('Tabelas criadas com sucesso!');
            } catch (err) {
              console.error('Erro ao criar tabela:', err);
            } finally {
              client.release();
            }
          };


createTables().then(() => process.exit(0));