const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
          type: String,
          required: true,
          unique: true,
        },
        password: {
          type: String,
          required: true,
        },
        userId: {
          type: String,
          default:""
        },
        profilePic: {
          type: String,
          default: "",
        },
        ProfileStatus: {
            type: String,
            default: "",
        },
        friends:[]
      },
      { timestamps: true }

)

module.exports = mongoose.model("User", UserSchema);