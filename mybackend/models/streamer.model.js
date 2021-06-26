var conn = require('./streamer.controller'),
 


     StreamModel = () => {}

     
    StreamModel.save = (data) => {
         console.log(data);
        return conn.query('INSERT INTO stream (user,email,password)  VALUES(?,?,?)',[data.user,data.email,data.password]);

    }

    
    StreamModel.find = (data, callback) =>{
    console.log("request done") 
   return conn.query('SELECT * FROM stream WHERE email = ? AND password = ?',[data.email,data.password], callback) 
    
    }

module.exports = StreamModel