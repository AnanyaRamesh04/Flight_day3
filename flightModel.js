import mongoose from "mongoose"


const flightsSchema= mongoose.Schema({
   
    airline:{type:String,required:true},
    source:{type:String,required:true},
    destn:{type:String,required:true},
    fare:{type:Number,required:true},
    duration:{type:String,required:true}

    });
   export default mongoose.model("Flight",flightsSchema);