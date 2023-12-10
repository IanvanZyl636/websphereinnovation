'use server'

import nodemailer from "nodemailer";
import contactUsSchema from "@/app/integration/zod/schemas/contact-us.schema";
import requestHandler from "@/app/actions/helpers/request-handler.helper";
import {ResponseModel} from "@/app/common/models/response.model";

export async function SubmitContactUs(prevState: ResponseModel, formData: FormData){
    return requestHandler(async () => {
        const contactUsFormData = Object.fromEntries(formData);

        const contactUsModel = contactUsSchema.parse(contactUsFormData);

        // const transporter = nodemailer.createTransport({
        //     host: 'smtp.gmail.com',
        //     port:465,
        //     secure: true,
        //     auth: {
        //         user: 'vanzyli101@gmail.com',
        //         pass: 'wzus xinz hluq risn',
        //     },
        // });
        //
        // const mailOptions = {
        //     from: 'vanzyli101@gmail.com',
        //     to: 'vanzyli101@gmail.com',
        //     subject: 'Websphere Innovation Contact Us Form',
        //     html: `
        //     First Name: ${contactUsModel.firstName}<br/>
        //     Surname: ${contactUsModel.surname}<br/>
        //     Email: ${contactUsModel.email}<br/>
        //     Phone Number: ${contactUsModel.phoneNumber}<br/>
        //     Message: ${contactUsModel.message}
        //     `,
        // };

        // await transporter.sendMail(mailOptions);
    });
}