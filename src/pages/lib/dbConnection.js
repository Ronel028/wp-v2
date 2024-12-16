import mongoose from "mongoose"

const connect = async () => {
    if (mongoose.connections[0].readyState) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw new Error('Could not connect to database');
    }
};


export default connect
