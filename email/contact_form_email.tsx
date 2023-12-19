import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
    message: string,
    senderEmail: string,
}

const ContactFormEmail = ({ message, senderEmail }:ContactFormEmailProps) => {
  return (
    <Html>
        <Head />
        <Preview>New message from your portfolio site.</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white border-black/10 my-10 p-10 rounded-md'>
                        <Heading className='leading-tight'>You have recieved the following message from the portfolio website form.</Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text> The sender&apos;s email is : {senderEmail} </Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

export default ContactFormEmail;