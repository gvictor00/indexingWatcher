const { Connection, Request } = require("tedious");

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
  connectionTimeout: 30000,
  idleTimeoutMillis: 130000,
  requestTimeout: 130000,
  options: {
    database: "dsdiv3_santander", //update me
    encrypt: true,
    trustServerCertificate: false,
    enableArithAbort: true,
    useUTC: true
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }/*,  
  // other settings
  ssl: {
    rejectUnauthorized: false
  }*/
};

var connection = new Connection(config);  

connection.on('connect', function(err) {  
    if (err){
      console.log(err);
    }
    else{
      // If no error, then good to proceed.  
      console.log("Connected");  
      //executeStatement();  
    }
});  
  
connection.connect();