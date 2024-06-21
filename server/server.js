const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3002; //서버 포트

app.use(cors());
app.use(express.json());

// MySQL 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: '121.135.133.205',
  user: 'SPSR',
  password: '0000',
  database: 'spsrenergy'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id', connection.threadId);
});

// 간단한 API 엔드포인트 예제
app.get('/api/data', (req, res) => {
  const query = 'SELECT * FROM tb_country';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.stack);
      res.status(500).send('Error fetching data');
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
