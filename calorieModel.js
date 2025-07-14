const mysql = require('mysql2');

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Mysql@12',
  database: 'My_Data'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Calorie model
class Calorie {
  constructor(data) {
    this.data = data;
  }

  static create(data) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO calories SET ?', data, (err, results) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({ id: results.insertId, ...data });
      });
    });
  }
}

module.exports = Calorie;
