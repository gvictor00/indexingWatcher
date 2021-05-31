const express = require('express')
const sql = require('mssql');
const { Connection, Request } = require("tedious");
const app = express()
const port = 3000

// Create connection to database
const config = {
  authentication: {
    options: {
      userName: "dssantander", // update me
      password: "eFormAdmin123!" // update me
    },
    type: "default"
  },
  server: "10.161.202.24", // update me
  //server: "SOALV3STDR02.stefanini.dom", // update me
  options: {
    database: "dsdiv3_santander", //update me
    encrypt: true,
    trustServerCertificate: false
  },  
  // other settings
  ssl: {
    rejectUnauthorized: false
  }/*,
  connectionTimeout: 15000,
  requestTimeout: 15000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
  */
};
/*
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

const connection = new Connection(config);

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
  if (err) {
    console.error(err.message);
  } else {
    queryDatabase();
  }
});

connection.connect();
*/
function queryDatabase() {
  console.log("Reading rows from the Table...");
/*
  // Read all rows from table
  const request = new Request(
    `SELECT TOP 20 pc.Name as CategoryName,
                   p.name as ProductName
     FROM [SalesLT].[ProductCategory] pc
     JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid`,
    (err, rowCount) => {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`${rowCount} row(s) returned`);
      }
    }
  );

  request.on("row", columns => {
    columns.forEach(column => {
      console.log("%s\t%s", column.metadata.colName, column.value);
    });
  });

  connection.execSql(request);
  */
}


async () => {
  try {
   // make sure that any items are correctly URL encoded in the connection string
   await sql.connect(config)
   await console.log("Sucesso!")
   //const result = await sql.query`select * from mytable where id = ${value}`
   //console.dir(result)
  } catch (err) {
   // ... error checks
  }
 }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test-select', (req, res) =>{
  res.send('Vamos tentar dar um select na base')
  console.log('Trying to conect to', config.server)

})

app.listen(port, () => {
  console.log('Example app listening at http://localhost:%s', port)
})
