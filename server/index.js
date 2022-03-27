const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');
const bodyParser = require("body-parser");
const authRouthe = require('./routhes/authRouthe')
const userRouthe = require("./routhes/userRouthe")
const Conversetion = require('./models/Conversation');
const multer = require("multer");
require("dotenv").config()


////

const server = require('http').createServer(app)
const io = require('socket.io')(server ,{cors :{origin : "*"}})

server.listen(process.env.PORT || 8800 ,() =>{
  console.log("server running")
})


////


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "/images")));

// app.use(
//   cors({
//     origin: "https://chat-appsamir.herokuapp.com/", // <-- location of the react app were connecting to
//     credentials: true,
//   })
// );
//app.use(cors())

mongoose
  .connect('mongodb+srv://samir:test1234@cluster0.1v5vw.mongodb.net/ChattDb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

//////////////////////////////////////

// const io = require("socket.io")(process.env.PORT || 8900, {
//   cors: {
//       origin: "https://chat-appsamir.herokuapp.com/",
//       credentials : true,
//       transports: ["websocket"]
//   },
// });


// const io = require("socket.io")(process.env.PORT || 8900, {
//   cors: {
//       origin: "https://chat-appsamir.herokuapp.com/",
//       credentials : true,
//       transports: ["websocket"]
//   },
// });


io.on("connection", (socket) => {


    socket.on("yenis", (message, friendId, ConName, myName) => {
  
      console.log(myName)
      socket.to(friendId).emit('qebul', message, myName)
  
  
      let res = Conversetion.findByIdAndUpdate(ConName, { $push: { messages: { new: message, myName: myName } } }) ///bura bax
        .then((res) => { console.log(res) })
        .catch((err) => { console.log(err) })
    })
  
    socket.on("newSocketID", (myId, friendId) => {
      socket.broadcast.emit('acceptId', myId)
      console.log(myId)
      console.log('jjj')
  
    })
  
  
  });
  




// const io = socketIO(server);


/////////////////////////////

app.use(authRouthe)
app.use(userRouthe)


app.use(express.static(path.join(__dirname, "/front/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front/build', 'index.html'));
});



// app.listen(process.env.PORT || 8800, () => {
//   console.log("Server Has Started");
// }); 