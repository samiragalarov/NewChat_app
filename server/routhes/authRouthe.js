const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");


router.post('/register', async(req ,res) =>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            password: hashedPass,
        })
        const user = await newUser.save();
        res.status(200).json(user);

    }catch(err){
        res.status(500).json(err);

    }

})

router.post('/login', async(req ,res) =>{  
    try{
        const {username , password} = req.body
        const user = await User.findOne({username : username})
        !user && res.status(400).json("Wrong  email!");
    
        const validated = await bcrypt.compare(password, user.password);
        !validated && res.status(400).json("Wrong password!");
        console.log(user)
    
        res.status(200).json({
            username: user.username,
            password : user.password,
            userid : user._id

    
       })
 
    
    }catch(err){
        res.status(500).json(err);
    
    } 

}) 
module.exports = router;