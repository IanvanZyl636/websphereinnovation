import express from 'express'
import next from 'next'
import nodemailer from 'nodemailer'

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('/api/*',async (req,res)=>{
        try{
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port:465,
            secure: true,
            auth: {
                user: 'vanzyli101@gmail.com',
                pass: 'wzus xinz hluq risn',
            },
        });

// Setup email data
        const mailOptions = {
            from: 'vanzyli101@gmail.com',
            to: 'vanzyli101@gmail.com',
            subject: 'Hello from Nodemailer',
            text: 'This is a test email sent using Nodemailer.',
        };

// Send email
        await transporter.sendMail(mailOptions);

        return res.json('Success');
        }catch (err){
            console.error(err);
        }
    });

    server.get('*', (req, res) => handle(req, res));

    server.listen(port, () =>{
        console.log(
            `> Server listening at http://localhost:${port} as ${
                dev ? 'development' : process.env.NODE_ENV
            }`
        );
    })
});