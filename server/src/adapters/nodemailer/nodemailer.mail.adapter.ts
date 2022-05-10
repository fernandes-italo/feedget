import nodemailer from 'nodemailer';
import { MailAdapter, SendmailData } from '../mail.adapter';

const transport = nodemailer.createTransport({
   host: 'smtp.mailtrap.io',
   port: 2525,
   auth: {
      user: '123asd123asd',
      pass: '123asd123asd',
   },
});

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendmailData) {
      await transport.sendMail({
         from: 'Equipe Feedget <oi@teste.com>',
         to: 'Italo <italo.feernandes@gmail.com>',
         subject,
         html: body,
      });
   }
}
