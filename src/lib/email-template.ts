export const welcomeEmailTemplate = (email: string) => `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Welcome to Tiny Church</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
  <style type="text/css">
    /* Reset styles */
    body, p, td {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5;
      color: #333333;
    }
    body {
      width: 100% !important;
      min-width: 100%;
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }
    table {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }
    /* Base styles */
    .wrapper {
      width: 100%;
      background-color: #f8fafc;
      padding: 40px 20px;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    .content {
      padding: 40px;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #000000;
      color: #ffffff !important;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 600;
      text-align: center;
      mso-padding-alt: 0;
      mso-text-raise: 15pt;
    }
    .footer {
      padding: 24px 40px;
      text-align: center;
      font-size: 12px;
      color: #6b7280;
      border-top: 1px solid #e5e7eb;
    }
    .footer a {
      color: #6b7280;
      text-decoration: underline;
    }
    /* Responsive styles */
    @media only screen and (max-width: 640px) {
      .container {
        width: 100% !important;
      }
      .content {
        padding: 24px !important;
      }
      .footer {
        padding: 20px !important;
      }
    }
  </style>
</head>
<body>
  <table role="presentation" cellpadding="0" cellspacing="0" class="wrapper" width="100%">
    <tr>
      <td align="center">
        <table role="presentation" class="container" cellpadding="0" cellspacing="0" width="600">
          <tr>
            <td class="content">
              <h1 style="margin: 0 0 24px; font-size: 24px; font-weight: bold; color: #111827;">Welcome to Tiny Church!</h1>
              <p style="margin: 0 0 16px;">Thanks for signing up to receive updates about Tiny Church. We're excited to have you join our community!</p>
              <p style="margin: 0 0 8px;">We'll keep you informed about:</p>
              <ul style="margin: 0 0 24px; padding-left: 20px;">
                <li style="margin-bottom: 8px;">Our upcoming launch</li>
                <li style="margin-bottom: 8px;">New features and improvements</li>
                <li style="margin-bottom: 8px;">Tips for building stronger church communities</li>
                <li style="margin-bottom: 8px;">Special announcements and events</li>
              </ul>
              <p style="margin: 0 0 32px;">In the meantime, feel free to visit our website to learn more about what we're building.</p>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 0 32px;">
                <tr>
                  <td align="center">
                    <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${process.env.NEXT_PUBLIC_WEBSITE_URL}" style="height:40px;v-text-anchor:middle;width:200px;" arcsize="10%" stroke="f" fillcolor="#000000">
                      <w:anchorlock/>
                      <center>
                    <![endif]-->
                    <a href="${process.env.NEXT_PUBLIC_WEBSITE_URL}" class="button">
                      Visit Our Website
                    </a>
                    <!--[if mso]>
                      </center>
                    </v:roundrect>
                    <![endif]-->
                  </td>
                </tr>
              </table>
              <p style="margin: 0;">Best regards,<br>The Tiny Church Team</p>
            </td>
          </tr>
          <tr>
            <td class="footer">
              <p style="margin: 0 0 8px;">© ${new Date().getFullYear()} Tiny Church. All rights reserved.</p>
              <p style="margin: 0;">
                <a href="${process.env.NEXT_PUBLIC_UNSUBSCRIBE_URL}?email=${encodeURIComponent(email)}">Unsubscribe</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`; 