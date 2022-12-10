

function sendMail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "webmailservice00@gmail.com",
        Password: "5805A9B330595EAB3C220356A32079559554",
        To: 'Micky.bansal75@gmail.com',
        From: "webmailservice00@gmail.com",
        Subject: 'Message from vikasbansal.in',
        Body: `<body marginheight="0" topmargin="0" marginwidth="0" style="margin: 0px; background-color: #f2f3f8;" leftmargin="0">

        <table cellspacing="0" border="0" cellpadding="0" width="100%" bgcolor="#f2f3f8"
            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;">
            <tr>
                <td>
                    <table style="background-color: #f2f3f8; max-width:670px; margin:0 auto;" width="100%" border="0"
                        align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td style="height:10px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">
                                <a href="www.vikasbansal.in/assets/images/vikas_bansal_logo.png" title="logo"
                                    target="_blank">
                                    <img width="150" src="https://vikasbansal.in/assets/images/vikas_bansal_logo.png"
                                        title="logo" alt="logo">
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:10px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td>
                                <table width="95%" border="0" align="center" cellpadding="0" cellspacing="0"
                                    style="max-width:670px; background:#fff; border-radius:3px; text-align:center;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);">
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td style="padding:0 35px;">
                                            <h2
                                                style="color:#1e1e2d; font-weight:500; margin:0;font-size:32px;font-family:'Rubik',sans-serif;">
                                                ${document.getElementById('f_name').value}
                                                ${document.getElementById('l_name').value}
    
                                            </h2>
    
                                            <p style="font-size:16px; color:#455056; margin:5px 0 0; line-height:24px;
                                                padding: 20px;">
                                                <span
                                                    style="text-align: right; display: block; font-size: 18px; font-weight: 700;"><span
                                                        style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>Messaged
                                                    you</span>
                                            <div style="display: flex; padding-left: 40px;">
                                                <p style="display: block;font-size: 16px; width: 150px;">Mobile No.</p>
                                                <p style="font-size: 16px;">+91 ${document.getElementById('mobile').value}
                                                </p>
                                            </div>
                                            <div style="display: flex; padding-left: 40px;">
                                                <p style="display: block;font-size: 16px; width: 150px;">Email</p>
                                                <p style="font-size: 16px;">${document.getElementById('email').value}</p>
                                            </div>
                                            <div style="display: flex; padding-left: 40px;">
                                                <p style="display: block;font-size: 16px; width: 150px;">Subject</p>
                                                <p style="font-size: 16px;">${document.getElementById('subject').value}</p>
                                            </div>
    
                                            </p>
                                            <span
                                                style="display:inline-block; vertical-align:middle; margin:29px 0 26px; border-bottom:1px solid #cecece; width:100px;"></span>
    
    
                                            <aside style="background-color:#ff9;
                                                box-shadow:0 3px 5px -3px #000;
                                                color:#009;
                                                float:right;
                                                font-family:'Times New Roman', Times, serif;
                                                font-size:16px;
                                                font-style:italic;
                                                height:14em;
                                                margin:1em;
                                                padding:2em;
                                                transform:rotate(3deg);
                                                width:14em;">
                                                ${document.getElementById('message').value}
                                            </aside>
    
    
    
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="height:40px;">&nbsp;</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:20px;">&nbsp;</td>
                        </tr>
                        <tr>
                            <td style="text-align:center;">
                                <p
                                    style="font-size:14px; color:rgba(69, 80, 86, 0.7411764705882353); line-height:18px; margin:0 0 0;">
                                    &copy; <strong>www.vikasbansal.in</strong> </p>
                            </td>
                        </tr>
                        <tr>
                            <td style="height:10px;">&nbsp;</td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>`
    }).then(
        message => alert(message)
    );
}