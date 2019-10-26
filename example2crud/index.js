//1 call mysql package 
const mysql = require ('../example2crudmysql');
//2 call xpres package 
const express = require ('express');
const bodyparser = require ('bodyparser');
//3 inctance a new expres app (get,post,delete)
var app = express ();
//4 enable json request 
app.use(bodyparser.jason());
//5. crete mysql data base connection 
var mysqlConnection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cars'


});

// 6 validate or check mysql connection 
mysqlConnection.connect((err)=>{
    if(!err)
        console.log('succesfull connection');
    else 
        console.log (' DB conection failed \nconsole.Error:' + JSON.stringify(err, undefined,2));
        
    
});


// run server 
app.listen(3000,()=>console.log('Epress server is ' + 'runining at port number 3000'));

