const ShingModel = require('../models/shing.model'),
ShingController = () => {}

ShingController.SignUp = async (req,res,next) => {
    const userview = false
    if(!userview){
        const {email,password} = req.body;
        const userToAdd = {
            email, password
        }
        console.log(userToAdd)
        ShingModel.save(userToAdd, (error) =>{
            if(err){
                res.json({err: "An error"})
            }else{
                res.json({message: true})
            }
        })
      }else{
          res.status(400).send({
              error:'Email is taken'
          })
      }
    }
    
ShingController.SignIn =  (req,res,next) =>{
       
    let email  = req.body.email;
    let password = req.body.password;
    const usertoFind = {
        email,password
    }
  //  console.log(usertoFind)
    ShingModel.find(usertoFind,(err,rows)=> {
      /*  console.log("Callback")
        console.log(usertoFind)*/
        console.log(err, '---', rows)
        if(err){
           
        // res.status(500).send({message:`Error al realizar la peticion`})
               console.log("error")
          }
         if(rows ==""){
        
         
            res.json({done:false})
         
         }else{
            // res.send({message:"error"})
           
            res.json({done:true})
         }
        
       //  res.status(200).send({usertoFind: usertoFind})
    })

  

}


/*
let stream = {
        user : req.body.user,
        email: req.body.email,
        password: req.body.password
    }
    console.log(stream)

    StreamModel.save(stream,(err) =>{
        if(err)
        {
            let locals = {
                title : `Error al salvar el registro con el user: ${stream.user}`,
                description : "Error de Sintaxis SQL",
                error : err
            }

            res.json(locals)
        }
        else
        {
            res.json({done:"true"})
        }
    })
*/

module.exports = ShingController