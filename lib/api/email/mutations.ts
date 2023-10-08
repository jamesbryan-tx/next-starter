import ActivateEmail from '@/components/email/activate';
import LoginEmail from '@/components/email/login';
import SendEmail from '@/components/email/send';
import { siteConfig } from '@/config/site';
import { resend } from '@/lib/email';
import {
  ActivateEmailParams,
  LoginEmailParams,
  SendEmailParams,
  activateEmailSchema,
  loginEmailSchema,
  sendEmailSchema,
} from '@/lib/email/utils';
import { env } from '@/lib/env.mjs';

export const sendEmail = async (input: SendEmailParams) => {
  const { name, email, subject } = sendEmailSchema.parse(input);
  const data = await resend.emails.send({
    from: `${siteConfig.name} <no-reply@${env.RESEND_VERIFIED_DOMAIN}>`,
    to: [email],
    subject: subject,
    react: SendEmail({
      userName: name,
    }),
  });
};

export const activateEmail = async (input: ActivateEmailParams) => {
  const { email, actionUrl } = activateEmailSchema.parse(input);
  const data = await resend.emails.send({
    from: `${siteConfig.name} <no-reply@${env.RESEND_VERIFIED_DOMAIN}>`,
    to: [email],
    subject: 'Activate Your Account',
    react: ActivateEmail({
      actionUrl: actionUrl,
    }),
  });
};

export const loginEmail = async (input: LoginEmailParams) => {
  const { name, email, actionUrl } = loginEmailSchema.parse(input);
  const data = await resend.emails.send({
    from: `${siteConfig.name} <no-reply@${env.RESEND_VERIFIED_DOMAIN}>`,
    to: [email],
    subject: `Sign-in Link for ${siteConfig.name}`,
    react: LoginEmail({
      userName: name,
      actionUrl: actionUrl,
    }),
  });
};
