'use server';

import { z } from 'zod';

import { ForgotPasswordSchema } from '@/schemas/auth';
import { connectToDb } from '@/lib/db';
import { UserModel } from '@/models/userModel';
import { sendPasswordResetEmail } from '@/lib/email-sender';

export async function forgotPassword({
  email,
}: z.infer<typeof ForgotPasswordSchema>) {
  connectToDb();

  // 1) Get user based on POSTed email
  const user = await UserModel.findOne({ email });
  if (!user) {
    return { error: 'There is no user with provided email.' };
  }

  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  try {
    const isProduction = process.env.NODE_ENV === 'production';
    const clientDomain = isProduction
      ? process.env.CLIENT_DOMAIN_PROD
      : process.env.CLIENT_DOMAIN_DEV;

    const resetURL = `${clientDomain}/auth/reset-password/${resetToken}`;

    await sendPasswordResetEmail({
      email: user?.email,
      name: user?.firstName || user?.username,
      resetURL,
    });

    return { success: 'Reset password sent!, Check your email' };
  } catch (error) {
    console.log(error);

    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return { error: 'There was an error sending the email. Try again later!' };
  }
}
