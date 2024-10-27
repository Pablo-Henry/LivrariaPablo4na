import pool from '../config/database';

const createBooksTable = async () => {
  const books = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS books (
        isbn13 SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        subtitle VARCHAR(100) UNIQUE NOT NULL,
        price NUMERIC(10,2) NOT NULL
      );
    `;
    await books.query(queryText);
    console.log('Tabela "books" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    books.release();
  }
};

createBooksTable().then(() => process.exit(0));