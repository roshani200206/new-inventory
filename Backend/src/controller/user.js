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


export async function login (){
    try {
        const {username,password} =req.body

        if(!username ||  !password){
          return res.status(400).json({
              message:"error or invalid fields"
          })
      }

      const existinguser = await User.findOne({
        username
      })
      
      if(!existinguser){
        return   res.status(400).json({
          message:"no user with this user name",
          
      })
      }

      const isValidPassword = await existinguser.isPasswordCorrect(password)

      if(!isValidPassword){
            return   res.status(400).json({
          message:"incorrect password"
      })
      }

      const accessToken = await existinguser.generateAccessToken()

      res.status(200).cookie("accessToken",accessToken,{secure:true}).json({
        message:"User logged in",
        data:existinguser
      })

  

        
    } catch (error) {
          res.status(500).json({
          message:"Error",
          
      })
    }
}


export async function logout (){
    try {
        const { _id } = req.user;

  await User.findByIdAndUpdate(
    _id,
  {},
    { new: true }
  );

  res
    .status(200)
    .clearCookie("accessToken")
    .json({
        message:"user logged out"
    });
}

        
     catch (error) {
             res.status(500).json({
          message:"Error",
          
      })
    }
}
export async function getMe  (req, res) {
  const { _id } = req.user;

  const user = await User.findById(_id).select("-password -refreshToken");

  res.status(200).json({
    message:"user details",data:user
  });
}
