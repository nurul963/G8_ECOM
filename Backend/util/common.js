import nodemailer from 'nodemailer'
import { GMAIL, GMAIL_APP_PASS } from './constant.js';
export const sendMail=async(email,name)=>{
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:GMAIL,
            pass: GMAIL_APP_PASS
        }
    });
    let message = {
        from: `ADMIN <${GMAIL}>`,
        // Comma separated list of recipients
        to: `<${GMAIL}>`,
        // Subject of the message
        subject: 'Please Approve New Accout Created',

        // plaintext body
        text: `One New Account Created from email:${email} and Name:${name}`,
    }
    let info = await transporter.sendMail(message);
    return info;
}