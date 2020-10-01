
const nodemailer = require ('nodemailer');




const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user:'pamela.lotriet@gmail.com',
            pass:'netbal12',
    }
});

const sendMail = (email, subject, text) => {
    const mailOptions = {
        from: email , // TODO replace this with your own email
        to: 'pamela.lotriet@gmail.com' , // TODO: the receiver email has to be authorized for the free tier
        subject,
        text
    }
    
    };

/*const mailOptions = {
    from: '',
    to: 'pamela.lotriet@gmail.com',
    subject: 'Hello Pam',
    text:'Testing 1,2...'
}*/

transporter.sendMail(mailOptions,function(err,data){
    if(err)
    {
        console.log('Error',err);
    }
    else
    {
        console.log('Email sent!')
    }
});


module.exports = sendMail;

