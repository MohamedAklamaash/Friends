import Mail from 'nodemailer/lib/mailer';
import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { htmlToText } from 'html-to-text';
import { RPEmailHTML } from '@/lib/emails/reset-password-template';

interface Props {
  email: string;
  name: string;
  resetURL: string;
}

export async function sendPasswordResetEmail({ email, name, resetURL }: Props) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: "aklamaash78@gmail.com",
      pass: "kbit esgu atjf bbxx",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const emailHtml = render(<RPEmailHTML name={name} resetURL={resetURL} />);

  const options: Mail.Options = {
    from: "aklamaash78@gmail.com",
    to: email,
    subject: 'Password Reset Notification',
    html: emailHtml,
    text: htmlToText(emailHtml),
  };

  await transporter.sendMail(options);
}
