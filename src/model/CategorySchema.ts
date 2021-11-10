import Mongoose from "mongoose";

const Schema = new Mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

export default Mongoose.model("categories", Schema)