const { clientUrl } = require('../envVariables');

const creditCardApplicationTemplate = body => {
   return`
      <head>
         <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
         <!--[if !mso]><!-->
         <meta http-equiv="X-UA-Compatible" content="IE=Edge">
         <!--<![endif]-->
         <!--[if (gte mso 9)|(IE)]>
         <xml>
         <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
         </o:OfficeDocumentSettings>
         </xml>
         <![endif]-->
         <!--[if (gte mso 9)|(IE)]>
   <style type="text/css">
      body {width: 600px;margin: 0 auto;}
      table {border-collapse: collapse;}
      table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
      img {-ms-interpolation-mode: bicubic;}
   </style>
   <![endif]-->
         <style type="text/css">
      body, p, div {
         font-family: arial,helvetica,sans-serif;
         font-size: 14px;
      }
      body {
         color: #000000;
      }
      body a {
         color: #1188E6;
         text-decoration: none;
      }
      p { margin: 0; padding: 0; }
      table.wrapper {
         width:100% !important;
         table-layout: fixed;
         -webkit-font-smoothing: antialiased;
         -webkit-text-size-adjust: 100%;
         -moz-text-size-adjust: 100%;
         -ms-text-size-adjust: 100%;
      }
      img.max-width {
         max-width: 100% !important;
      }
      .column.of-2 {
         width: 50%;
      }
      .column.of-3 {
         width: 33.333%;
      }
      .column.of-4 {
         width: 25%;
      }
      @media screen and (max-width:480px) {
         .preheader .rightColumnContent,
         .footer .rightColumnContent {
         text-align: left !important;
         }
         .preheader .rightColumnContent div,
         .preheader .rightColumnContent span,
         .footer .rightColumnContent div,
         .footer .rightColumnContent span {
         text-align: left !important;
         }
         .preheader .rightColumnContent,
         .preheader .leftColumnContent {
         font-size: 80% !important;
         padding: 5px 0;
         }
         table.wrapper-mobile {
         width: 100% !important;
         table-layout: fixed;
         }
         img.max-width {
         height: auto !important;
         max-width: 100% !important;
         }
         a.bulletproof-button {
         display: block !important;
         width: auto !important;
         font-size: 80%;
         padding-left: 0 !important;
         padding-right: 0 !important;
         }
         .columns {
         width: 100% !important;
         }
         .column {
         display: block !important;
         width: 100% !important;
         padding-left: 0 !important;
         padding-right: 0 !important;
         margin-left: 0 !important;
         margin-right: 0 !important;
         }
         .social-icon-column {
         display: inline-block !important;
         }
      }
   </style>
         <!--user entered Head Start--><!--End Head user entered-->
      </head>
      <body>
         <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#FFFFFF;">
         <div class="webkit">
            <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
               <tr>
               <td valign="top" bgcolor="#FFFFFF" width="100%">
                  <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                     <tr>
                     <td width="100%">
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                           <tr>
                           <td>
                              <!--[if mso]>
      <center>
      <table><tr><td width="600">
   <![endif]-->
                                       <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                       <tr>
                                          <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
      <tr>
         <td role="module-content">
         <p></p>
         </td>
      </tr>
   </table><table class="wrapper" role="module" data-type="image" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="4bd1c108-e531-4b45-9df5-8949d01f8757">
      <tbody>
         <tr>
         <td style="font-size:6px; line-height:10px; padding:0px 0px 0px 0px;" valign="top" align="center">
            <img class="max-width" border="0" style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;" width="600" alt="" data-proportionally-constrained="true" data-responsive="true" src="http://cdn.mcauto-images-production.sendgrid.net/d4c16113f3fc5c7b/fbdfe76d-33a7-423e-a0ba-612bbfc74982/598x66.png">
         </td>
         </tr>
      </tbody>
   </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="fa8c6aae-d2ae-4a6f-b9a2-b0475669befc" data-mc-module-version="2019-10-22">
      <tbody>
         <tr>
         <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 14px">Dear ${body.lastName.toUpperCase()},</span></div>
   <div style="font-family: inherit; text-align: inherit"><br></div>
   <div style="font-family: inherit; text-align: inherit"><span style="font-size: 14px">Thanks so much for choosing One Nevada Credit Union for your loan needs.</span></div>
   <div style="font-family: inherit; text-align: inherit"><br></div>
   <div style="font-family: inherit; text-align: inherit"><span style="font-size: 14px">We're currently reviewing your loan application #${body.applicationNumber}, and we'll notify you by email within two business days as to the status of your application., You may check your application status any time at <a href="${clientUrl}/application-status">wesite</a></span></div>
   <div style="font-family: inherit; text-align: inherit"><br></div>
   <div style="font-family: inherit; text-align: inherit"><span style="font-size: 14px">If you have any questions or need additional information, please give us a call at 800-388-3000. Once again, thanks for considering us for your loan needs.</span></div>
   <div style="font-family: inherit; text-align: inherit"><br></div>
   <div style="font-family: inherit; text-align: inherit"><span style="font-size: 14px">Best regards,</span></div>
   <div style="font-family: inherit; text-align: inherit"><br></div>
   <div style="font-family: inherit; text-align: inherit"><span style="font-size: 14px">One Nevada Credit Union</span></div><div></div></div></td>
         </tr>
      </tbody>
   </table><table class="module" role="module" data-type="spacer" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="05f4d19d-ba9d-4cd2-834d-1391037fb2e9">
      <tbody>
         <tr>
         <td style="padding:0px 0px 50px 0px;" role="module-content" bgcolor="">
         </td>
         </tr>
      </tbody>
   </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="073eb72d-da1f-40c7-af50-30d9954a213c" data-mc-module-version="2019-10-22">
      <tbody>
         <tr>
         <td style="padding:18px 0px 18px 0px; line-height:22px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="color: #222222; font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">Federally Insured by NCUA. Equal Housing Lender.</span><br>
   <span style="color: #222222; font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">This e-mail was sent from an address that is not monitored.</span><br>
   <span style="color: #222222; font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">Replies to this message are not read. You may reach us via phone or email on our</span> <a href="https://www.onenevada.org/contact" title="contact page"><span style="color: #1155cc; font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255)">contact page</span></a><span style="color: #222222; font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">.</span><br>
   <span style="color: #222222; font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">Copyright © 2019 One Nevada Credit Union. All Rights Reserved.</span> <a href="https://www.onenevada.org/disclosure/privacy-policy" title="Privacy Statement"><span style="color: #1155cc; font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255)">Privacy Statement</span></a><span style="color: #222222; font-family: Roboto, RobotoDraft, Helvetica, Arial, sans-serif; font-size: 12px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; float: none; display: inline">.</span></div><div></div></div></td>
         </tr>
      </tbody>
   </table></td>
                                       </tr>
                                       </table>
                                       <!--[if mso]>
                                    </td>
                                 </tr>
                                 </table>
                              </center>
                              <![endif]-->
                           </td>
                           </tr>
                        </table>
                     </td>
                     </tr>
                  </table>
               </td>
               </tr>
            </table>
         </div>
         </center>
      </body>
   `;
}

module.exports = creditCardApplicationTemplate;
