import conn from "../config/conn.js";

const tableEventos = /*sql*/ `
    CREATE TABLE IF NOT EXISTS eventos(
        evento_id VARCHAR(60) PRIMARY KEY,
        titulo VARCHAR(255) NOT NULL,
        data DATE NOT NULL,
        palestrante_id VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
`;

conn.query(tableEventos, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Tabela [eventos] criada com sucesso");
});
