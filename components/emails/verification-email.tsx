import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
  Hr,
} from "@react-email/components";

interface UserVerificationEmailProps {
  userName: string;
  verificationUrl: string;
}

const VerificationEmail = ({
  userName,
  verificationUrl,
}: UserVerificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        Verify your email address to complete your account setup
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[580px] mx-auto p-[48px]">
            {/* Header Section */}
            <Section className="mb-[40px]">
              <Heading className="text-[32px] font-bold text-gray-900 text-center mb-[16px]">
                Verify Your Email Address
              </Heading>
              <Text className="text-[16px] text-gray-600 text-center leading-[24px] m-0">
                Complete your account setup in just one click
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Welcome Section */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                Hi there!
              </Text>
              <Text className="text-[16px] text-gray-700 leading-[24px] m-0">
                Thank you for signing up! We're excited to have you on board. To
                get started and ensure your account is secure, please verify
                your email address.
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Verification Action Section */}
            <Section className="mb-[32px]">
              <Heading className="text-[20px] font-semibold text-gray-900 mb-[16px]">
                Verify Your Account
              </Heading>
              <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                Click the button below to verify your email address and activate
                your account:
              </Text>

              <Section className="text-center mb-[24px]">
                <Button
                  href={verificationUrl}
                  className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
                >
                  Verify Email Address
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 leading-[20px] mb-[16px]">
                If the button doesn&apos;t work, copy and paste this link into
                your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all m-0">
                <Link
                  href={verificationUrl}
                  className="text-blue-600 underline"
                >
                  {verificationUrl}
                </Link>
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Security Notice Section */}
            <Section className="bg-amber-50 border border-amber-200 rounded-[8px] p-[24px] mb-[32px]">
              <Heading className="text-[18px] font-semibold text-amber-800 mb-[12px] flex items-center">
                🔒 Security Notice
              </Heading>
              <Text className="text-[14px] text-amber-700 leading-[20px] mb-[12px]">
                • This verification link will expire in{" "}
                <strong>24 hours</strong> for your security
              </Text>
              <Text className="text-[14px] text-amber-700 leading-[20px] mb-[12px]">
                • If you didn&apos;t create an account with us, please ignore
                this email
              </Text>
              <Text className="text-[14px] text-amber-700 leading-[20px] m-0">
                • Never share this verification link with anyone else
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Support Section */}
            <Section className="mb-[32px]">
              <Heading className="text-[18px] font-semibold text-gray-900 mb-[12px]">
                Need Help?
              </Heading>
              <Text className="text-[14px] text-gray-600 leading-[20px] m-0">
                If you're having trouble with verification or have any
                questions, feel free to contact our support team at{" "}
                <Link
                  href="mailto:support@yourcompany.com"
                  className="text-blue-600 underline"
                >
                  support@yourcompany.com
                </Link>
              </Text>
            </Section>

            <Hr className="border-gray-200 mb-[32px]" />

            {/* Closing Section */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 leading-[24px] m-0">
                Best regards,
                <br />
                <strong>The Team</strong>
              </Text>
            </Section>

            {/* Footer Section */}
            <Section className="border-t border-gray-200 pt-[32px]">
              <Text className="text-[12px] text-gray-500 text-center leading-[16px] m-0 mb-[8px]">
                © 2025 Your Company Name. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center leading-[16px] m-0 mb-[8px]">
                123 Business Street, Jakarta, Indonesia
              </Text>
              <Text className="text-[12px] text-gray-500 text-center leading-[16px] m-0">
                <Link href="#" className="text-gray-500 underline">
                  Unsubscribe
                </Link>{" "}
                |
                <Link href="#" className="text-gray-500 underline ml-[8px]">
                  Privacy Policy
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;
