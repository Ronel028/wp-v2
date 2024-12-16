import mongoose from "mongoose";

const visitorLogSchema = mongoose.Schema(
    {
        device_type: String,
        device_model: String,
        operating_system: String,
        browser_info: String
    },
    {
        timestamps: true,
    }
)

export default mongoose.models.VisitorLog || mongoose.model('VisitorLog', visitorLogSchema)