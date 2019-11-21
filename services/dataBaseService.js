var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "5409iP@Me",
    database: "nodeWiseDB"
});
module.exports = {
    connectToDataBase : function(){
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }
}

// addUser(a,p){
//     // var sql = "CREATE table loginData(UserName varchar(255), Password varchar(255) )";
// // var sql = "CREATE TABLE loginDetails (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Result: " , result);
//     });
// }

