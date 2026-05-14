import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendEmail(createContactDto: CreateContactDto) {
    console.log('--- Tentative d\'envoi d\'email ---');
    console.log('Host SMTP:', process.env.SMTP_HOST || 'smtp.gmail.com (DÉFAUT)');
    console.log('User SMTP:', process.env.SMTP_USER || 'NON DÉFINI');
    
    const { name, email, message } = createContactDto;

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'contact@demystops.com',
      subject: `Nouveau message de contact de ${name}`,
      text: message,
      html: `
        <h3>Nouveau message de contact</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      return { success: true, message: 'Email envoyé avec succès' };
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      throw new Error('Erreur lors de l\'envoi de l\'email');
    }
  }
}
