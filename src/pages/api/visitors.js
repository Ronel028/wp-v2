import VisitorLog from '@/model/Logs'
import mongoose from 'mongoose';

export default async function handler(req, res) {

    if (req.method === 'POST') {
        try {

            if (mongoose.connections[0].readyState) {
                return;
            }

            try {
                await mongoose.connect(process.env.MONGODB_URI);
                console.log('Connected to MongoDB');
                const { deviceType, deviceModel, operatingSystem, browserInfo } = req.query;
                const visitorLog = new VisitorLog({
                    device_type: deviceType,
                    device_model: deviceModel,
                    operating_system: operatingSystem,
                    browser_info: browserInfo
                })
                await visitorLog.save()
                await mongoose.connection.close()
                res.status(200).json({ done: true })
            } catch (error) {
                console.error('MongoDB connection error:', error);
                throw new Error('Could not connect to database');
            }

        } catch (error) {
            console.log(error.message)
        }
    }
}