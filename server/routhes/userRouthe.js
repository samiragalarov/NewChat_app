const router = require('express').Router();
const Conversation = require('../models/Conversation');
const User = require('../models/User');
const bcrypt = require("bcrypt");


router.put('/changeid',async(req,res)=>{
    try{
        const ChangeUser = await User.findByIdAndUpdate({_id:req.body.mainId},req.body)
        console.log(req.body)
        res.json(ChangeUser)
        

    }catch(err){

    }


})
  
//get current one friend
router.get("/getfriend/:id",async(req,res)=>{
    try{   
        console.log(req.params.id)
        const getFriend = await User.find({username :req.params.id})
        console.log(getFriend)
        res.json(getFriend[0].userId)

    }catch(err){
        console.log(err)

    }

})

///
//get all frineds
router.get("/getAllfriend",async(req,res)=>{
    try{

        const getFriend = await User.find()
        res.json(getFriend)

    }catch(err){
        console.log(err)

    }

})

/// create new conversation
router.post("/conversation", async (req,res) => {
    try{
        console.log(req.body.first)
        const Talk = new Conversation({
            betweenUser: [req.body.first ,req.body.second],
            messages: []


        })
        let con = await Talk.save()
        res.json(con)   

    }catch(err){
        console.log(err)
        res.json(err) 

    }

})

router.get("/test/:first/:second",(req,res)=>{
    try{
        let resq =  Conversation.find({betweenUser :{$all: [req.params.first, req.params.second]}}).then(
            function(value) {console.log(value);  res.json(value);
            },
            function(error) {console.log(error);}
          );
    
       
    }catch(err){
        res.json(err)
    }

})

/// update user
router.put("/updateProfile/:id" , async(req,res) =>{
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    
    try{
        const updateUser = await User.findByIdAndUpdate({_id :req.params.id},{ $set: req.body},
            { new: true })

        res.json(updateUser)

    }catch(err){
        console.log(err)
        res.json(err)

    }

})


module.exports = router;

