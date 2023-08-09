const express = require('express');//Import the Express
const mysql = require('mysql');//Imprt the Mysql Package
const cors = require('cors'); // Import the cors package
const app = express();

//Sever PORT
const HTTP_PORT = 8081;

//DataBase Connection
const connection = mysql.createConnection({
  host: 'localhost',//HostName
  user: 'root',//userName
  password: '',//Paswrod
  database: 'user',  //Databse Name
});

//Connection Error Check
connection.connect((error) => {
  if (!error) {
    console.log('Connected to the Database');
  } else {
    console.error('Error connecting to the database:', error);
  }
});

//Bodtype of Data
app.use(express.json())

// Use cors middleware with specific origin
const corsOptions = {
  origin: 'http://localhost:3000',  
};

app.use(cors(corsOptions));
//GET ROUTE
app.get('/', (req, res) => {
    //DataBase Query
  const sql = 'SELECT * FROM student';
  connection.query(sql, (err, data) => {
    if (!err) {
      return res.json(data);
    } else {
      console.error('Error SQL QUERY the database:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  });
});


//POST ROUTE
app.post('/Create',(req,res)=>{

})

app.listen(HTTP_PORT, () => {
  console.log(`Express Server is running on port ${HTTP_PORT}`);
});
