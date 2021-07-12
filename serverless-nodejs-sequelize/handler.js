'use strict';
var mysql = require("mysql"); 

module.exports.hello = async (event) => {
  var connection = mysql.createConnection
  ({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DATABASE
  })
  console.log("createConnection 성공")
  
  await connection.connect();


  await connection.query("SELECT * FROM tags", function(err, rows, fields) {
    console.log(err,rows,fields); 
  });

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Go Serverless v1.0! Your function executed successfully!',
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
