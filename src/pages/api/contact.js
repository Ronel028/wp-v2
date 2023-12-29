export default async function handler(req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 587,
        host: 'smtp-mail.outlook.com',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        },
        tls:{
            ciphers: 'SSLv3'
        },
    })

    let send = await transporter.sendMail({
        from: 'kin-hakari@outlook.com',
        to: 'floridaronel15@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: req.body.message + " | Sent from: " + req.body.email,
        html: `<div>${req.body.message}</div>`
    })

    res.status(200).json({ status: true, msg: "Email Sent Successfully" })

}