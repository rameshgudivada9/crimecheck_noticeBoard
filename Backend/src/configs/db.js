const mongoose=require("mongoose");

const mongooseConnect=()=>{
    return mongoose.connect("mongodb+srv://crimecheck:crimecheck123@cluster0.dgqt2r3.mongodb.net/?retryWrites=true&w=majority");
};

module.exports=mongooseConnect;