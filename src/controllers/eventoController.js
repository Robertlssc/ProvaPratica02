import conn from "../config/conn.js";
import { v4 as uuidv4 } from "uuid";
import { response } from "express";

export const postRegistrar = (request, response) => {
  const { titulo, data, palestrante_id } = request.body;
  console.log(palestrante_id)
  const evento_id = uuidv4();

  if (!titulo) {
    response.status(400).json({ err: "O titulo do objeto é obrigatório" });
    return;
  }
  if (!data) {
    response.status(400).json({ err: "A data do objeto é obrigatória" });
    return;
  }
  if (!palestrante_id) {
    response.status(400).json({ err: "O Id do palestrante é obrigatório" });
    return;
  }

  const palestranteInfo = /*sql*/`SELECT * FROM palestrantes WHERE palestrante_id = ${palestrante_id[0]}`;
  
  console.log(palestrante_id[0])

  const insertSql = /*sql*/ `
    INSERT INTO eventos (??, ??, ??, ??)VALUES(?, ?, ?, ?)`;
  const insertData = [
    "evento_id",
    "titulo",
    "data",
    "palestrante_id",
    evento_id,
    titulo,
    data,
    palestranteInfo,
  ];
  conn.query(insertSql, insertData, (err, data) => {
    if (err) {
      console.error(err);
      response.status(500).json({ err: "Erro ao cadastrar evento" });
      return;
    }
    response.status(201).json({ message: "Evento criado com sucesso" });
  });
};

export const getAgenda = (request, response) => {
  const sql = /*sql*/ `SELECT * FROM eventos`;

  conn.query(sql, (err, data) => {
    if (err) {
      console.error(err);
      response.status(500).json({ err: "Erro ao listar clientes" });
      return
    }
    response.status(200).json(data)
  });
}; 