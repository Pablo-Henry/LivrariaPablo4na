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

        CREATE TABLE IF NOT EXISTS sale_on_the_table (
          id SERIAL PRIMARY KEY,
          client_id INTEGER NOT NULL,
          book_id INTEGER NOT NULL,
          quantidade INTEGER NOT NULL DEFAULT 1,
          data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (client_id) REFERENCES client_on_the_table(id),
          FOREIGN KEY (book_id) REFERENCES books_on_the_table(isbn)
        );`;
              await client.query(queryText);
              console.log('Tabelas criadas com sucesso!');
            } catch (err) {
              console.error('Erro ao criar tabela:', err);
            } finally {
              client.release();
            }
          };


createTables().then(() => process.exit(0));