'use server';
import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact_form_email";
import { renderAsync } from "@react-email/components";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get('senderEmail')
  const messageSubject = formData.get('messageSubject')
  const message = formData.get('message')
  
  if (!validateString(senderEmail, 30)) {
    return {
      error: "Invalid sender email."
    }
  }

  if (!validateString(messageSubject, 50)) {
    return {
      error: "Invalid sender email subject."
    }
  }

  if (!validateString(message, 2000)) {
    return {
      error: "Invalid message."
    }
  }

  try {
    const html = await renderAsync(
      React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      })
    );

    await resend.emails.send({
      from: `Portfolio site mail <onboarding@resend.dev>`,
      to: 'jithinmanilal736@gmail.com',
      subject: messageSubject as string,
      reply_to: senderEmail as string,
      html: html,
    });
  }
  catch (error) {
    return {
      error: getErrorMessage(error),
    }
  }
};