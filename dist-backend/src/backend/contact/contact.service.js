var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
let ContactService = class ContactService {
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
    async sendEmail(createContactDto) {
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
        }
        catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            throw new Error('Erreur lors de l\'envoi de l\'email');
        }
    }
};
ContactService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], ContactService);
export { ContactService };
