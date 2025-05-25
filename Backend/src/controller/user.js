import User from "../model/user.model"

export async function signup (req,res){
  try {
      const {username,email,password}= req.body
  
  
      if(!username || !email || !password){
          return res.status(400).json({
              message:"error or invalid fields"
          })
      }
  
      const existingUser = await User.findOne({
          email
      })
  
      if(existingUser){
             return res.status(400).json({
              message:"user already exist with same email"
          })
      }
      
  
      const newUser  =await User.create({
          username,
          email,
          password
      })
  
      res.status(200).json({
          message:"user created",
          data:newUser
      })
  } catch (error) {
       res.status(500).json({
          message:"Error",
          
      })
    
  }

}