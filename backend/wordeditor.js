import { pool } from "./db.js";

const getWords = async() => {
    try {
        return await new Promise(function (resolve, reject) {
          pool.query("SELECT * FROM words_diacritics", (error, results) => {
            if (error) {
              reject(error);
            }
            if (results && results.rows) {
              resolve(results.rows);
            } else {
              reject(new Error("No results found"));
            }
          });
        });
      } catch (error_1) {
        console.error(error_1);
        throw new Error("Internal server error");
      } 
};

const addWord = (body) => {
    return new Promise(function (resolve, reject) {
        const { word, totalCount } = body;
        pool.query(
          "INSERT INTO words_diacritics (word, totalCount) VALUES ($1, $2) RETURNING *",
          [word, totalCount],
          (error, results) => {
            if (error) {
              reject(error);
            }
            if (results && results.rows) {
              resolve(
                `A new word has been added: ${JSON.stringify(results.rows[0])}`
              );
            } else {
              reject(new Error("No results found"));
            }
          }
        );
    });
};

const deleteWord = (id) => {
    return new Promise(function (resolve, reject) {
      pool.query(
        "DELETE FROM words_diacritics WHERE id = $1",
        [id],
        (error, results) => {
          if (error) {
            reject(error);
          }
          resolve(`Word deleted with ID: ${id}`);
        }
      );
    });
};

//update a wordcount
const updateWord = (id, body) => {
    return new Promise(function (resolve, reject) {
    const { word, total_count } = body;
      pool.query(
        "UPDATE words_diacritics SET word = $1, total_count = $2 WHERE id = $3 RETURNING *",
        [word, total_count, id],
        (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(`Word updated: ${JSON.stringify(results.rows[0])}`);
          } else {
            reject(new Error("No results found"));
          }
        }
      );
    });
  };

module.exports = {
    getWords,
    addWord,
    deleteWord,
    updateWord,
};