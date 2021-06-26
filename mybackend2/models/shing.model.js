var conn = require('./shing.controller'),
 


     ShingModel = () => {}

     
    ShingModel.save = (data) => {
         console.log(data);
        return conn.query('INSERT INTO shing (email,password)  VALUES(?,?)',[data.email,data.password]);

    }

    
    ShingModel.find = (data, callback) =>{
    console.log("request done") 
   return conn.query('SELECT * FROM shing WHERE email = ? AND password = ?',[data.email,data.password], callback) 
    
    }

module.exports = ShingModel