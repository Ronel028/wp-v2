import connect from '../lib/dbConnection'
import VisitorLog from '@/model/Logs'
import mongoose from 'mongoose';

export default async function handler(req, res) {

    if (req.method === 'POST') {
        try {
            await connect()
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
            console.log(error.message)
        }
    }
}