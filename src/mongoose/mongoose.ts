import mongoose from "mongoose";

const mongoConnection = mongoose.createConnection(process.env.MONGO_URI!);
export default mongoConnection;