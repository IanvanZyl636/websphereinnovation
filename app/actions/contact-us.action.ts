'use server'

import nodemailer from "nodemailer";
import contactUsSchema from "@/app/integration/zod/schemas/contact-us.schema";
import requestHandler from "@/app/actions/helpers/request-handler.helper";
import {ResponseModel} from "@/app/common/models/response.model";
import SMTPConnection from "nodemailer/lib/smtp-connection";

export async function SubmitContactUs(prevState: ResponseModel, formData: FormData){
    return requestHandler(async () => {
        const contactUsFormData = Object.fromEntries(formData);

        const contactUsModel = contactUsSchema.parse(contactUsFormData);

        const transporter = nodemailer.createTransport({
            host: process.env.CONTACT_US_SMTP_HOST,
            port:process.env.CONTACT_US_SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.CONTACT_US_SMTP_USERNAME,
                pass: process.env.CONTACT_US_SMTP_PASSWORD,
            },
        } as SMTPConnection.Options);

        const mailOptions = {
            from: process.env.CONTACT_US_EMAIL_FROM,
            to: process.env.CONTACT_US_EMAIL_TO,
            subject: 'Contact Us Form',
            html: `
            Name: ${contactUsModel.fullName}<br/><br/>           
            Email: ${contactUsModel.email}<br/><br/>            
            Phone: ${contactUsModel.phoneNumber}<br/><br/>            
            Message: ${contactUsModel.message}
            `,
        };

        await transporter.sendMail(mailOptions);
    });
}