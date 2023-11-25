//###################################Database file########################################

//importing sqlite3
import sqlite3 from 'sqlite3';
//importing md5
import md5 from 'md5';

//declaring db source
const DBSOURCE = 'db.sqlite';

//initialising a new sqlite 3 database
let db = new sqlite3.Database(DBSOURCE,(err)=>{
    if(err){
        //throwing an error in case it fails
        console.error(err.message);
        throw err;
    }
    //if everything goes well
    else{
        console.log("Connected to SQLite DB")
            //creating database
            db.run(`CREATE TABLE user (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name text, 
                email text UNIQUE, 
                password text, 
                CONSTRAINT email_unique UNIQUE (email)
                )`,
            (err) => {
                if (err) {
                    // Table already created
                }else{
                    // Table just created, creating some rows
                    var insert = 'INSERT INTO user (name, email, password) VALUES (?,?,?)'
                    db.run(insert, ["admin","admin@example.com",md5("admin123456")])
                    db.run(insert, ["user","user@example.com",md5("user123456")])
                }
            });  
        }
    });
        
module.exports(db);