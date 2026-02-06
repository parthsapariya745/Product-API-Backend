const mongoose = require("mongoose")

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB is connected");
    } catch (error) {
        console.log("DB error: ", error.message);
    }
}