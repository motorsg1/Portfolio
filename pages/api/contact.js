import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // or 'STARTTLS'
  auth: {
    user: 'bhesmarkperez@gmail.com',
    pass: 'SV6zUC`+`eLwtc*',
  },
});

export default async function handler(req, res) {
  const { name, email, phone, company, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'bhesmarkperez@gmail.com',
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email' });
  }
}