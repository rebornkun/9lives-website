import * as React from "react";
import {
  Html,
  Body,
  Head,
  Container,
  Preview,
  Section,
  Text,
  Font,
  Img,
  Link,
} from "@react-email/components";

interface WaitlistConfirmationEmailProps {
  email: string;
}

// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://benetech.io";

export const WaitlistConfirmationEmail = (
  {
    // email = "user@example.com",
  }: WaitlistConfirmationEmailProps
) => {
  const previewText = `Thanks for joining 9Lives waitlist!`;

  return (
    <Html>
      <Head>
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2",
            format: "woff2",
          }}
          fontWeight={500}
          fontStyle="normal"
        />
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2",
            format: "woff2",
          }}
          fontWeight={600}
          fontStyle="normal"
        />
        <Font
          fontFamily="Poppins"
          fallbackFontFamily="Arial"
          webFont={{
            url: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2",
            format: "woff2",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section
            style={{
              width: "100%",
              height: "100px",
              backgroundColor: "#fff",
              borderBottom: "1px solid #EDEBEB",
              paddingTop: "32px",
              paddingBottom: "32px",
              textAlign: "center",
            }}
          >
            <Img
              src="https://9livesapp.com/images/logo.png"
              width="140"
              height="52"
              alt="9Lives Logo"
              style={{ margin: "0 auto" }}
            />
          </Section>
          <Text className="heading" style={h2}>
            Thanks for joining the waitlist — we&apos;re thrilled to have you on
            this journey with us!
          </Text>
          <Text className="heading" style={text}>
            As one of our early community members, you’ll be the first to hear
            about new updates, exciting features, and major news as we build the
            9Lives experience together.
          </Text>

          <Section
            style={{
              width: "100%",
              paddingLeft: "50px",
              paddingRight: "50px",
              marginTop: "60px",
            }}
          >
            <Text className="heading" style={h5}>
              What exactly is 9lives?
            </Text>
            <Text className="heading" style={text2}>
              We like to call it your “everything” app. It’s where productivity
              meets community — helping you stay organized, inspired, and
              connected.
            </Text>
            <Img
              src="https://9livesapp.com/images/emailT.png"
              width="528"
              height="497"
              alt="9Lives hero"
              style={{ margin: "0 auto", marginTop: "40px" }}
            />

            <Text className="heading two" style={h2}>
              Some exciting features
            </Text>

            <Section style={card}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  borderSpacing: "0",
                  border: "none",
                  margin: "0px 0px",
                }}
              >
                <tr>
                  <td style={{ width: "40px", verticalAlign: "top" }}>
                    <Img
                      src="https://9livesapp.com/images/folderIcon.png"
                      width="40"
                      height="40"
                      alt="folder icon"
                    />
                  </td>
                  <td style={{ paddingLeft: "14px", verticalAlign: "top" }}>
                    <Text style={text3}>
                      Create Folders for Every Part of Your Life Manage your
                      work life, school life, creative projects, and more — all
                      in one place.
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>
            <Section style={card}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  borderSpacing: "0",
                  border: "none",
                  margin: "0px 0px",
                }}
              >
                <tr>
                  <td style={{ width: "40px", verticalAlign: "top" }}>
                    <Img
                      src="https://9livesapp.com/images/aiIcon.png"
                      width="40"
                      height="40"
                      alt="ai icon"
                    />
                  </td>
                  <td style={{ paddingLeft: "14px", verticalAlign: "top" }}>
                    <Text style={text3}>
                      Social Meets Progress. Share your goals, follow friends,
                      join challenges, and get inspired by your community.
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>
            <Section style={card}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  borderSpacing: "0",
                  border: "none",
                  margin: "0px 0px",
                }}
              >
                <tr>
                  <td style={{ width: "40px", verticalAlign: "top" }}>
                    <Img
                      src="https://9livesapp.com/images/peopleIcon.png"
                      width="40"
                      height="40"
                      alt="people icon"
                    />
                  </td>
                  <td style={{ paddingLeft: "14px", verticalAlign: "top" }}>
                    <Text style={text3}>
                      AI Built Into Your Workflow. Turn your notes into
                      flashcards, quizzes, and summaries with a single tap.
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>
          </Section>

          <Section style={section}>
            <Text className="heading three" style={h3}>
              Coming soon
            </Text>
            <table
              style={{
                width: "100%",
                borderCollapse: "separate",
                borderSpacing: "16px",
                border: "none",
                margin: "0px 0px",
                marginTop: "0px",
              }}
            >
              <tr>
                <td style={{ verticalAlign: "top" }}>
                  <Img
                    src="https://9livesapp.com/images/appstore.png"
                    width="128"
                    height="40"
                    alt="app store image"
                  />
                </td>
                <td style={{ verticalAlign: "top" }}>
                  <Img
                    src="https://9livesapp.com/images/googleplay.png"
                    width="128"
                    height="40"
                    alt="google play image"
                  />
                </td>
              </tr>
            </table>
            {/* <Button style={button} href="https://twitter.com/benetech">
              Follow us on Twitter
            </Button> */}
          </Section>

          <Text style={text4}>
            You are subscribed to 9live&apos;s Updates and Newsletters. To make
            sure you receive your email from 9lives, add{" "}
            <Link
              href="mailto:info@9livesapp.com"
              style={{
                color: "#071556",
                fontWeight: "400",
                textDecorationLine: "underline",
              }}
            >
              info@9livesapp.com
            </Link>{" "}
            to your address book.
          </Text>

          <table
            style={{
              width: "100%",
              maxWidth: "549px",
              borderCollapse: "separate",
              borderSpacing: "16px",
              border: "none",
              margin: "0px auto",
              marginTop: "10px",
            }}
          >
            <tr>
              <td style={{ verticalAlign: "top" }}>
                <Link href="" style={link}>
                  Unsubscribe
                </Link>
              </td>
              <td style={{ verticalAlign: "top" }}>
                <Link href="" style={link}>
                  Community Guidelines
                </Link>
              </td>
              <td style={{ verticalAlign: "top" }}>
                <Link href="" style={link}>
                  Privacy policy
                </Link>
              </td>
              <td style={{ verticalAlign: "top" }}>
                <Link href="" style={link}>
                  Terms and conditions
                </Link>
              </td>
            </tr>
          </table>

          <table
            style={{
              width: "100%",
              maxWidth: "484px",
              border: "none",
              margin: "0px auto",
              marginTop: "10px",
              marginBottom: "65px",
            }}
          >
            <tr>
              <td style={{ verticalAlign: "top" }}>
                <Img
                  src="https://9livesapp.com/images/logoTwo.png"
                  width="80"
                  height="30"
                  alt="logo Two"
                />
              </td>
              <td style={{ verticalAlign: "center" }}>
                <Text style={text5}>Made with ❤️ in Nigeria</Text>
              </td>
              <td style={{ verticalAlign: "top" }}>
                <table
                  style={{
                    width: "100%",
                    border: "none",
                  }}
                >
                  <tr>
                    <td style={{ verticalAlign: "top" }}>
                      <Img
                        src="https://9livesapp.com/images/linkdln.png"
                        width="24"
                        height="24"
                        alt="linkdln"
                      />
                    </td>
                    <td style={{ verticalAlign: "top", marginLeft: "12px" }}>
                      <Img
                        src="https://9livesapp.com/images/tiktok.png"
                        width="24"
                        height="24"
                        alt="tiktok"
                      />
                    </td>
                    <td style={{ verticalAlign: "top", marginLeft: "12px" }}>
                      <Img
                        src="https://9livesapp.com/images/instagram.png"
                        width="24"
                        height="24"
                        alt="instagram"
                      />
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </Container>
      </Body>
    </Html>
  );
};

// Email styles
const main = {
  backgroundColor: "#f5f5f5",
  fontFamily: "'Poppins', 'Segoe UI', Helvetica, Arial, sans-serif" as const,
};

const container = {
  margin: "0 auto",
  backgroundColor: "#ffffff",
  maxWidth: "600px",
};

const h2 = {
  color: "#000",
  fontSize: "24px",
  lineHeight: "36px",
  fontWeight: "700",
  textAlign: "center" as const,
  fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif" as const,
  maxWidth: "398px",
  margin: "0 auto",
  marginTop: "40px",
};
const h3 = {
  color: "#000",
  fontSize: "24px",
  lineHeight: "36px",
  fontWeight: "700",
  textAlign: "center" as const,
  fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif" as const,
  maxWidth: "398px",
  margin: "0 auto",
};

const h5 = {
  color: "#0D0E10",
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "20px",
  fontFamily: "'Poppins', 'Segoe UI', Helvetica, Arial, sans-serif" as const,
};

const text = {
  color: "#000",
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: "400",
  fontFamily: "'Poppins', 'Segoe UI', Helvetica, Arial, sans-serif" as const,
  textAlign: "center" as const,
  maxWidth: "500px",
  margin: "0 auto",
  marginTop: "20px",
};
const text5 = {
  color: "#000",
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: "400",
  fontFamily: "'Poppins', 'Segoe UI', Helvetica, Arial, sans-serif",
  textAlign: "center" as const,
  maxWidth: "500px",
  margin: "0 auto",
};
const text2 = {
  color: "#000",
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: "400",
  fontFamily: "'Poppins', 'Segoe UI', Helvetica, Arial, sans-serif",
  maxWidth: "500px",
  marginTop: "20px",
};
const card = {
  width: "100%",
  maxWidth: "414px",
  margin: "0 auto",
  marginTop: "40px",
};

const text3 = {
  color: "#0D0E10",
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: "400",
  fontFamily: "'Poppins', 'Segoe UI', Helvetica, Arial, sans-serif",
  maxWidth: "340px",
  margin: "0px 0px",
};

const text4 = {
  color: "#0D0E10",
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: "400",
  fontFamily: "'Poppins', 'Segoe UI', Helvetica, Arial, sans-serif",
  textAlign: "center" as const,
  maxWidth: "520px",
  margin: "0 auto",
  marginTop: "80px",
};

const section = {
  width: "100%",
  maxWidth: "400px",
  margin: "0 auto",
  marginTop: "80px",
  textAlign: "center" as const,
  backgroundColor: "#F9FAFC",
  borderRadius: "12px",
  paddingTop: "37px",
  paddingBottom: "37px",
  paddingLeft: "56px",
  paddingRight: "56px",
};
const link = {
  color: "#071556",
  fontSize: "14px",
  fontWeight: "400",
  textDecorationLine: "underline",
  fontFamily: "'Poppins', 'Segoe UI', Helvetica, Arial, sans-serif",
};

export default WaitlistConfirmationEmail;
